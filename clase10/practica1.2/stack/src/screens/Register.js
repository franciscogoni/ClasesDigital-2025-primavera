import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class Register extends Component{
    constructorconstructor(props) {
    super(props);
    this.state = {}

    render ()
     return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Registro</Text>
      <TextInput
      keyboardType='email-address'
      placeholder='email'
      onChangeText={ text => this.setState({email:text})}>
      </TextInput>

      <Pressable
        style={styles.button}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Ya tengo cuenta</Text>
      </Pressable>
    </View>
  );
}
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
