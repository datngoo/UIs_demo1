import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import tokens from './tokens/tokens.json';

export const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: tokens.color.primary.value,
    text: tokens.color.text.value,
    textLight: tokens.color.textlight.value,
    yellow1: tokens.color.yellow1.value,
    yellow2: tokens.color.yellow2.value,
    grey1: tokens.color.grey1.value,
    grey2: tokens.color.grey2.value,
    grey3: tokens.color.grey3.value,
    brow1: tokens.color.brow1.value,
    brow2: tokens["variable collection"].brow2.value,
    background: tokens["variable collection"].background.value,
    blue1: tokens["variable collection"].blue1.value,
    green1: tokens["variable collection"].green1.value,
    green2: tokens["variable collection"].green2.value,
  },

  spacing: {
    sm: Number(tokens.spacing.spacing_small.value),
    md: Number(tokens.spacing.spacing_medium.value),
    lg: Number(tokens.spacing.spacing_large.value),
  },

  radius: {
    button: Number(tokens.radius.radious_button.value),
  },

  fonts: {
    labelLarge: {
      fontSize: tokens.font.labellarge.value.fontSize,
      fontFamily: tokens.font.labellarge.value.fontFamily,
      fontWeight: `${tokens.font.labellarge.value.fontWeight}`,
      lineHeight: tokens.font.labellarge.value.lineHeight,
      letterSpacing: tokens.font.labellarge.value.letterSpacing,
    },
    header: {
      fontSize: tokens.font.header.value.fontSize,
      fontFamily: tokens.font.header.value.fontFamily,
      fontWeight: `${tokens.font.header.value.fontWeight}`,
      lineHeight: tokens.font.header.value.lineHeight,
      letterSpacing: tokens.font.header.value.letterSpacing,
    },
    task: {
      fontSize: tokens.font.task.value.fontSize,
      fontFamily: tokens.font.task.value.fontFamily,
      fontWeight: `${tokens.font.task.value.fontWeight}`,
      lineHeight: tokens.font.task.value.lineHeight,
      letterSpacing: tokens.font.task.value.letterSpacing,
    },
    textThin: {
      fontSize: tokens.font.textthin.value.fontSize,
      fontFamily: tokens.font.textthin.value.fontFamily,
      fontWeight: `${tokens.font.textthin.value.fontWeight}`,
      lineHeight: tokens.font.textthin.value.lineHeight,
      letterSpacing: tokens.font.textthin.value.letterSpacing,
    },
    smallTextThin: {
      fontSize: tokens.font.smalltextthin.value.fontSize,
      fontFamily: tokens.font.smalltextthin.value.fontFamily,
      fontWeight: `${tokens.font.smalltextthin.value.fontWeight}`,
      lineHeight: tokens.font.smalltextthin.value.lineHeight,
      letterSpacing: tokens.font.smalltextthin.value.letterSpacing,
    },
  },
};
export default theme
