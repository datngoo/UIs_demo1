import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';

// Tab Navigator (gồm Home, Profile, Settings)
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>

      {/* Onboarding là màn hình đầu tiên khi mở app */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      {/* Sau khi onboarding, chuyển sang Login */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Sau khi đăng nhập thành công, dùng tab bar ở MainApp */}
      <Stack.Screen name="MainApp" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
