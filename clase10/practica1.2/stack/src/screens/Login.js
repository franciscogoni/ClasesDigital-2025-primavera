import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Ir al registro</Text>
      </Pressable>

      <Pressable
        style={[styles.button, { marginTop: 15, backgroundColor: '#28a745' }]}
        onPress={() => navigation.replace('HomeMenu')} 
      >
        <Text style={styles.buttonText}>Entrar en la app</Text>
      </Pressable>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
