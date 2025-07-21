import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    labelLarge: { fontSize: 14, fontWeight: '600', lineHeight: 20, letterSpacing: 0.1 },
    bodyLarge: { fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.15 },
    bodyMedium: { fontSize: 14, fontWeight: '400', lineHeight: 20, letterSpacing: 0.25 },
    bodySmall: { fontSize: 12, fontWeight: '400', lineHeight: 16, letterSpacing: 0.4 },
    labelSmall: { fontSize: 11, fontWeight: '500', lineHeight: 16, letterSpacing: 0.5 },
    regular: { fontFamily: 'System', fontWeight: 'normal' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    light: { fontFamily: 'System', fontWeight: '300' },
    thin: { fontFamily: 'System', fontWeight: '100' },
  },
};
