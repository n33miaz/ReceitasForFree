import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { CustomTabBar } from '@/components/CustomTabBar'; 

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
      <CustomTabBar />
    </View>
  );
}