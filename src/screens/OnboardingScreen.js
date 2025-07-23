import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function OnboardingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // ⏱️ tự chuyển sang Login sau 3s
    }, 3000); // 3000ms = 3 giây

    return () => clearTimeout(timer); // dọn dẹp
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Organizer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555' },
});
