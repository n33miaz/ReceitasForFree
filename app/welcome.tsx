import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg' }}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />

      <View style={styles.header}>
        <Ionicons name="star" size={16} color="#f9a825" />
        <Text style={styles.headerText}>50k+ receitas</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Vamos{"\n"}Cozinhar</Text>
        <Text style={styles.subtitle}>Encontre as melhores receitas para você!</Text>
        <Link href="/login" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comece agora →</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  header: {
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  headerText: { color: '#fff', marginLeft: 8, fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  title: {
    color: '#fff',
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: { color: '#ddd', fontSize: 18, textAlign: 'center', marginBottom: 30 },
  button: {
    backgroundColor: '#f9a825',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});