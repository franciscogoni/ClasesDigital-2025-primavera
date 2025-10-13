import React, { Component } from "react";
import { StyleSheet,View, Text, Pressable } from "react-native";

class BotonSaludar extends Component {
  constructor(props) {
    super()
    this.state = {mensaje: "Me Clikeaste"};
  }
  Saludo (){
    console.log(this.state.mensaje)
  }
    render () {
    return(
        <View style={Styles.container}>
        <Pressable onPress={() => this.Saludo()}>
        <Text style={Styles.texto}>clickeame</Text>
        </Pressable>
        </View>
    );
}}

const Styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 10,
        borderRadius: 4
    },
    texto:{
      fontWeight: "Bold" 
    }
})

export default BotonSaludar;