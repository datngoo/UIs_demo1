import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import spacing from '../theme/spacing';

export default function LoginScreen({ navigation }) {
  const { colors, roundness } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: validate inputs and perform login logic
    navigation.replace('MainApp');
  };

  return (
    <AuthLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.flex}
      >
        <ScrollView
          contentContainerStyle={[styles.scrollContainer, { padding: spacing.md }]}
          keyboardShouldPersistTaps="handled"
        >
          <InputField
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            accessibilityLabel="Nhập email"
            style={{ marginBottom: spacing.md, borderRadius: roundness }}
          />

          <InputField
            label="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Nhập mật khẩu"
            style={{ marginBottom: spacing.md, borderRadius: roundness }}
          />

          <PrimaryButton
            label="Đăng nhập"
            onPress={handleLogin}
            accessibilityLabel="Đăng nhập tài khoản"
            style={{ borderRadius: roundness }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
