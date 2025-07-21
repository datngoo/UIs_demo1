import React, { useState } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';
import spacing from '../theme/spacing';

export default function LoginScreen({ navigation }) {
  const { colors, roundness } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: validate inputs and perform login logic
    navigation.replace('Home');

  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>      
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.input, { borderRadius: roundness }]}
            accessibilityLabel="Nhập email"
          />
          <TextInput
            label="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry
            style={[styles.input, { borderRadius: roundness }]}
            accessibilityLabel="Nhập mật khẩu"
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={[styles.button, { borderRadius: roundness }]}
            accessibilityLabel="Đăng nhập tài khoản"
          >
            Đăng nhập
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.md,
  },
  input: {
    marginBottom: spacing.md,
  },
  button: {
    marginTop: spacing.sm,
  },
});
