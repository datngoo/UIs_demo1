// get-figma-colors.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_FILE_ID = 'ZpiCKDZhCTAMXE57pA9rPK'; // <-- thay bằng của bạn
const FIGMA_TOKEN = 'YOUR_PERSONAL_ACCESS_TOKEN_HERE'; // <-- thay bằng token của bạn

const outputPath = path.join(__dirname, 'output', 'colors.js');

async function fetchStyles() {
  const headers = {
    'X-Figma-Token': FIGMA_TOKEN,
  };

  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_ID}/styles`;
  const fileUrl = `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`;

  try {
    const stylesRes = await axios.get(url, { headers });
    const fileRes = await axios.get(fileUrl, { headers });

    const styles = stylesRes.data.meta.styles;
    const document = fileRes.data.document;

    const paintStyles = styles.filter(s => s.style_type === 'FILL');

    const colors = {};

    function walk(node) {
      if (node.styles) {
        for (const [key, styleId] of Object.entries(node.styles)) {
          const styleMeta = styles.find(s => s.node_id === node.id);
          const fills = node.fills;

          if (
            key === 'fill' &&
            fills &&
            fills.length > 0 &&
            fills[0].type === 'SOLID'
          ) {
            const name = styleMeta?.name || node.name;
            const color = fills[0].color;
            const r = Math.round(color.r * 255);
            const g = Math.round(color.g * 255);
            const b = Math.round(color.b * 255);

            colors[name.replace(/\s+/g, '_').toLowerCase()] = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
          }
        }
      }

      if (node.children) {
        node.children.forEach(walk);
      }
    }

    walk(document);

    // Write to colors.js
    const colorExport = `// Auto-generated from Figma\nexport default ${JSON.stringify(colors, null, 2)};\n`;

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, colorExport);

    console.log('✅ colors.js created at:', outputPath);
  } catch (err) {
    console.error('❌ Error:', err.response?.data || err.message);
  }
}

fetchStyles();
