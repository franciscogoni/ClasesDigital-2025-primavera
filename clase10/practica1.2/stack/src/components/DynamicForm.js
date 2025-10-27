import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }

  onSubmit = () => {
    console.log('Comentario ingresado:', this.state.comentario);
  };

  render() {
    const { comentario } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dejanos tu comentario</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu comentario aquí..."
          multiline={true}
          numberOfLines={4}
          value={comentario}
          onChangeText={(text) => this.setState({ comentario: text })}
        />

        <Pressable style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        
        <View style={styles.preview}>
          <Text style={styles.previewTitle}>Comentario ingresado:</Text>
          <Text>{comentario}</Text>
        </View>
      </View>
    );
  }
}

export default DynamicForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  preview: {
    marginTop: 20,
    width: '90%',
    alignItems: 'flex-start',
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
