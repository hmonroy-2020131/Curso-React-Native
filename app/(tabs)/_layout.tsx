import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const tabIcons = {
  index: 'house.fill',
  explore: 'paperplane.fill',
};

const getTabOptions = (title: string, iconName: keyof typeof tabIcons) => ({
  title,
  tabBarIcon: ({ color }: { color: string }) => (
    <IconSymbol size={28} name={tabIcons[iconName]} color={color} />
  ),
});

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeTintColor,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen name="index" options={getTabOptions('Home', 'index')} />
      <Tabs.Screen name="explore" options={getTabOptions('Explore', 'explore')} />
    </Tabs>
  );
}
