import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    router.replace('/recipes');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <Text style={styles.subtitle}>Crie uma nova conta</Text>

        <TextInput 
          placeholder="Usuário" 
          placeholderTextColor="#555" 
          style={styles.input} 
        />
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#555" 
          style={styles.input} 
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          placeholder="Telefone" 
          placeholderTextColor="#555" 
          style={styles.input} 
          keyboardType="phone-pad"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#555"
            secureTextEntry={!showPassword}
            style={styles.inputPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.loginPrompt}>
          Possui uma conta?{' '}
          <Link href="/login">
            <Text style={styles.loginLink}>Login</Text>
          </Link>
        </Text>
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
  registerButton: {
    backgroundColor: '#0288D1',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginPrompt: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 14,
  },
  loginLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});