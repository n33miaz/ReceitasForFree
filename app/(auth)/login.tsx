import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/recipes');
  };

  const handleSocialLogin = (platform: string) => {
    Alert.alert('Login Social', `Funcionalidade de login com ${platform} (demonstrativo).`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.subtitle}>Entre com a sua conta</Text>

        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#555" 
          style={styles.input} 
          keyboardType="email-address" 
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#555"
            style={styles.inputPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Não tem uma conta?{' '}
          <Link href="/register">
            <Text style={styles.signupLink}>Crie uma</Text>
          </Link>
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => handleSocialLogin('Google')}>
            <Ionicons name="logo-google" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Facebook')}>
            <Ionicons name="logo-facebook" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialLogin('Instagram')}>
            <Ionicons name="logo-instagram" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
  },
  passwordContainer: {
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    color: '#fff',
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#f9a825',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupText: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 14,
  },
  signupLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
    paddingHorizontal: 40,
  },
});