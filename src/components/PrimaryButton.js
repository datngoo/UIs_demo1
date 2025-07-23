import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import spacing from '../theme/spacing';

export default function PrimaryButton({ label, style, ...props }) {
  const { roundness, colors } = useTheme();

  return (
    <Button
      mode="contained"
      style={[styles.button, { borderRadius: roundness, backgroundColor: colors.primary }, style]}
      labelStyle={{ color: colors.onPrimary }}
      {...props}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.sm,
  },
});
