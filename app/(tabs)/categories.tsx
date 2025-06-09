import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { RECIPES, Recipe } from '@/data/recipes'; 

const uniqueCategories: string[] = [...new Set(RECIPES.map((recipe: Recipe) => recipe.category))];

type IconName = React.ComponentProps<typeof Ionicons>['name'];

const categoryIcons: { [key: string]: IconName } = {
  'Prato Principal': 'restaurant-outline',
  'Sobremesa': 'ice-cream-outline',
  'Massa': 'pizza-outline',
  'Salada': 'leaf-outline',
  'Fitness': 'barbell-outline',
};

export default function CategoriesScreen() {
  const handleCategoryPress = (category: string) => {
    router.push({ pathname: '/recipes', params: { filter: category } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Categorias</Text>
        <View style={styles.grid}>
          {uniqueCategories.map((category: string) => ( 
            <TouchableOpacity key={category} style={styles.card} onPress={() => handleCategoryPress(category)}>
              <Ionicons name={categoryIcons[category] || 'fast-food-outline'} size={32} color="#f9a825" />
              <Text style={styles.cardText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{height: 100}}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, marginTop: 50, paddingHorizontal: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 },
  card: {
    width: '48%', backgroundColor: '#f8f8f8', padding: 20,
    borderRadius: 10, alignItems: 'center', justifyContent: 'center',
    marginBottom: 15, height: 120,
  },
  cardText: { marginTop: 10, fontWeight: '600' },
});