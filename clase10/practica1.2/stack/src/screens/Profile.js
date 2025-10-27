import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Perfil</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.replace('Login')} 
      >
        <Text style={styles.buttonText}>Desloguearse</Text>
      </Pressable>
    </View>
  );
}
export default Profile

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
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
