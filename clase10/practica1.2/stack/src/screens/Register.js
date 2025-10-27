import React, { Component } from 'react';
import { auth,db } from '../firebase/config';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      error: '',
    };
  }

  register = () => {
    const { email, password } = this.state;
     if (!email.includes('@')) {
    this.setState({ error: 'Email mal formateado' });
    return;
  }
  if (password.length < 6) {
    this.setState({ error: 'La password debe tener una longitud mínima de 6 caracteres' });
    return;
  }
    auth.createUserWithEmailAndPassword(email, password)
      .then( response => {
        this.props.navigation.navigate('LogIn');
      })
      .catch( error => {
        this.setState({ error: 'Fallo en el registro' });
      });
  };

  render() {
    const { email, userName, password, error } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>

        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={userName}
          onChangeText={(text) => this.setState({ userName: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Pressable style={styles.button} onPress={this.register}>
          <Text style={styles.buttonText}>Registrate</Text>
        </Pressable>

        <Pressable style={styles.boton}onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ya tengo cuenta</Text>
        </Pressable>

        <View style={styles.preview}>
          <Text style={styles.previewTitle}>Datos ingresados:</Text>
          <Text>Email: {email}</Text>
          <Text>Usuario: {userName}</Text>
          <Text>Contraseña: {password}</Text>
        </View>
      </View>
    );
  }
}

export default Register;

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
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  preview: {
    marginTop: 30,
    alignItems: 'flex-start',
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boton:{ 
    marginTop: 10, 
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8, }
});
