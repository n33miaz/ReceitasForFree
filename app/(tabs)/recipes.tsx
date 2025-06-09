import React, { useMemo } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { RECIPES, Recipe } from '@/data/recipes'; 

export default function RecipesScreen() {
  const params = useLocalSearchParams<{ filter?: string }>();

  const filteredRecipes = useMemo(() => {
    if (params.filter && typeof params.filter === 'string') {
      return RECIPES.filter(recipe => recipe.category === params.filter);
    }
    return RECIPES;
  }, [params.filter]);

  const pageTitle = params.filter ? `Categoria: ` : 'Encontre ';
  const pageSubtitle = params.filter || 'receitas incríveis';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <Text style={styles.title}>
              {pageTitle}
              <Text style={styles.titleHighlight}>{pageSubtitle}</Text>
            </Text>
        </View>

        {filteredRecipes.map((recipe: Recipe) => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={recipe.image} style={styles.cardImage} />
              <View style={styles.cardOverlay} />
              <View style={styles.cardContent}>
                <Text style={styles.cardCategory}>{recipe.category.toUpperCase()}</Text>
                <Text style={styles.cardTitle}>{recipe.title}</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.cardAuthor}>por {recipe.author.name}</Text>
                  <View style={styles.cardRating}>
                    <FontAwesome name="star" size={14} color="#FFD700" />
                    <Text style={styles.cardRatingText}>{recipe.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
        <View style={{ height: 100 }} /> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { paddingTop: 50, paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold' },
  titleHighlight: { color: '#f9a825' },
  card: {
    marginHorizontal: 20, marginBottom: 20, height: 200, borderRadius: 15,
    overflow: 'hidden', elevation: 5, backgroundColor: '#000'
  },
  cardImage: { width: '100%', height: '100%', position: 'absolute' },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  cardContent: { flex: 1, padding: 15, justifyContent: 'flex-end' },
  cardCategory: {
    color: '#fff', fontSize: 12, fontWeight: 'bold', letterSpacing: 1, marginBottom: 5
  },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  cardAuthor: { color: '#eee', fontSize: 14 },
  cardRating: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20
  },
  cardRatingText: { color: '#fff', marginLeft: 5, fontSize: 12, fontWeight: 'bold' },
});