import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { auth,db } from '../firebase/config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error:""
    };
  }

  login = () => {
      const { email, password } = this.state;

      auth.signInWithEmailAndPassword (email, password)
        .then( (response) => {
          this.setState({loggedIn: true})
        })
        .catch( error => {
          console.log(error)
          this.setState({ error: 'No coinciden las credenciales' });
        });
    };

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        
        <Pressable style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

       
        <Pressable
          style={[styles.button, { marginTop: 15, backgroundColor: '#007AFF' }]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registrarme</Text>
        </Pressable>

        
        <Pressable style={styles.boton}
          onPress={() => navigation.replace('HomeMenu')}
        >
          <Text style={styles.buttonText}>Entrar en la app</Text>
        </Pressable>

        <Text> {this.state.error ?
          this.state.error: ""}</Text>
        <View style={styles.preview}>
          <Text style={styles.previewTitle}>Datos ingresados:</Text>
          <Text>Email: {email}</Text>
          <Text>Contraseña: {password}</Text>
        </View>
      </View>
    );
  }
}

export default Login;

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
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
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
    marginTop: 15, 
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8 }
});
