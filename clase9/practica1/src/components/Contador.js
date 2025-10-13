import React, { Component } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

class Contador extends Component {
constructor(props) {
    super()
    this.state = {contador: 0};
  }
  contar (){
    this.setState({contador: this.state.contador + 1});
  }
  render (){
    return (
        <View>
            <Text>Cantidad de cliks: {this.state.contador}</Text>
            <View style={Styles.container}>
                <Pressable onPress={() => this.contar()}>
                    <Text style={Styles.texto}>Click aquí</Text>
                </Pressable>
            </View>
        </View>
    )
  }
}

const Styles = StyleSheet.create({
    container: {
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4
    },
    grande:{
        marginVertical: 5
    },
    texto:{
      fontWeight: "Bold", 
    }
})

export default Contador;