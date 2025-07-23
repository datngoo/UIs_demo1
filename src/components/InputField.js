import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import spacing from '../theme/spacing';

export default function InputField({ style, ...props }) {
  const { roundness, colors } = useTheme();

  return (
    <TextInput
      mode="outlined"
      style={[styles.input, { borderRadius: roundness, backgroundColor: colors.surface }, style]}
      outlineColor={colors.outline}
      activeOutlineColor={colors.primary}
      textColor={colors.text}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.md,
  },
});
