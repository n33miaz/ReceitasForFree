import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { RECIPES } from '@/data/recipes'; 

const { width } = Dimensions.get('window');
const imageSize = width / 3;

export default function ProfileScreen() {

  const Stat = ({ value, label }: { value: string, label: string }) => (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://github.com/n33miaz.png' }} 
            style={styles.avatar}
          />
          <Text style={styles.name}>n33miaz</Text>
          <Text style={styles.bio}>perfil.exemplo@etec.sp.gov.br</Text>
        </View>

        <View style={styles.statsContainer}>
          <Stat value={RECIPES.length.toString()} label="Posts" />
          <Stat value="1.2M" label="Seguidores" />
          <Stat value="300" label="Seguindo" />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlightsContainer}>
            {RECIPES.slice(0, 5).map((recipe, index) => (
              <View key={index} style={styles.highlightCircle}>
                <Image source={recipe.image} style={styles.highlightImage}/>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.galleryContainer}>
          {RECIPES.map(recipe => (
            <View key={recipe.id} style={styles.galleryImageContainer}>
              <Image source={recipe.image} style={styles.galleryImage} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10, borderWidth: 3, borderColor: '#f9a825'},
  name: { fontSize: 22, fontWeight: 'bold' },
  bio: { fontSize: 14, color: '#666', marginTop: 5 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#eee' },
  stat: { alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 14, color: '#666' },
  sectionTitle: { fontSize: 16, fontWeight: '600', paddingHorizontal: 20, marginTop: 20, marginBottom: 10 },
  highlightsContainer: { paddingLeft: 20 },
  highlightCircle: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: '#ddd', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  highlightImage: { width: 62, height: 62, borderRadius: 31 },
  galleryContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 },
  galleryImageContainer: { width: imageSize, height: imageSize, padding: 1 },
  galleryImage: { flex: 1, width: '100%', height: '100%' },
});