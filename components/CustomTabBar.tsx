import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, usePathname, Href } from 'expo-router';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type TabConfig = {
  path: Href;
  icon: IconName;
};

const TABS: TabConfig[] = [
  { path: '/recipes', icon: 'book-outline' },
  { path: '/search', icon: 'search-outline' },
  { path: '/categories', icon: 'grid-outline' },
  { path: '/profile', icon: 'person-outline' },
];

export function CustomTabBar() {
  const pathname = usePathname();

  const handleAddPress = () => {
    Alert.alert('Funcionalidade em Desenvolvimento', 'Este botão é apenas para demonstração.');
  };

  return (
    <View style={styles.container}>
      {TABS.slice(0, 2).map((tab) => {
        const isActive = pathname === tab.path;
        const iconName = isActive ? (tab.icon.replace('-outline', '') as IconName) : tab.icon;
        return (
          <Link key={tab.path as string} href={tab.path} asChild>
            <TouchableOpacity style={styles.tab}>
              <Ionicons name={iconName} size={28} color={isActive ? '#f9a825' : '#a0a0a0'} />
            </TouchableOpacity>
          </Link>
        );
      })}

      <TouchableOpacity key="add-button" style={styles.addButton} onPress={handleAddPress}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      {TABS.slice(2).map((tab) => {
        const isActive = pathname === tab.path;
        const iconName = isActive ? (tab.icon.replace('-outline', '') as IconName) : tab.icon;
        return (
          <Link key={tab.path as string} href={tab.path} asChild>
            <TouchableOpacity style={styles.tab}>
              <Ionicons name={iconName} size={28} color={isActive ? '#f9a825' : '#a0a0a0'} />
            </TouchableOpacity>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 25, left: 20, right: 20, height: 60,
        flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
        backgroundColor: 'white', borderRadius: 30, elevation: 5,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, shadowRadius: 4,
    },
    tab: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    addButton: {
        width: 60, height: 60, borderRadius: 30, backgroundColor: '#f9a825',
        justifyContent: 'center', alignItems: 'center', marginTop: -35,
        elevation: 8, shadowColor: '#f9a825', shadowOpacity: 0.5, shadowRadius: 5,
    },
});