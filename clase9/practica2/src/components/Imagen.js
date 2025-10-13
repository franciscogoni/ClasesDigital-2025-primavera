import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function Imagen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Probando la imagen</Text>

      <Image
        source={require("../../assets/imagenes/zonaMedia.jpeg")}
        style={styles.imagen}
        resizeMode="contain"
      />

      <Image
        source={{
          uri: "https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85",
        }}
        style={styles.imagen}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  imagen: {
    width: 250,
    height: 150,
    marginVertical: 10,
  },
});

export default Imagen;
