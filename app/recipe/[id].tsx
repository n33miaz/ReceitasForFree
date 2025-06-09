import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { RECIPES } from '@/data/recipes';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const recipe = RECIPES.find((r) => r.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Receita não encontrada!</Text>
      </View>
    );
  }

  const handleDemoPress = () => {
    Alert.alert('Funcionalidade em Desenvolvimento', 'Este botão é apenas para demonstração.');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Stack.Screen options={{ title: recipe.title }} />
      <ScrollView>
        <Image source={recipe.image} style={styles.foodImage} />
        <View style={styles.details}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.authorRow}>
            <Image source={{ uri: recipe.author.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.author}>{recipe.author.name}</Text>
              <Text style={styles.role}>Chef de Cozinha</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            {recipe.ingredients.map((item, index) => (
              <Text key={index} style={styles.stepText}>• {item}</Text>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Modo de Preparo</Text>
            {recipe.instructions.map((item, index) => (
              <Text key={index} style={styles.stepText}>
                <Text style={styles.stepNumber}>{index + 1}. </Text>{item}
              </Text>
            ))}
          </View>

          <TouchableOpacity style={styles.videoButton} onPress={handleDemoPress}>
            <Text style={styles.videoButtonText}>Assistir ao Vídeo</Text>
          </TouchableOpacity>
        </View>
         <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  foodImage: { width: '100%', height: 250 },
  details: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#333' },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  author: { fontWeight: 'bold', fontSize: 16 },
  role: { color: '#666' },
  section: { marginTop: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  stepText: { fontSize: 16, color: '#555', lineHeight: 24, marginBottom: 8 },
  stepNumber: { fontWeight: 'bold', color: '#333' },
  videoButton: {
    backgroundColor: '#f9a825',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  videoButtonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
});