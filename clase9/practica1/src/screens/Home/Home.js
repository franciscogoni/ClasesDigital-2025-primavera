import React from "react";
import { StyleSheet, View } from "react-native";
import Saludar from "../../components/Saludo";
import BotonSaludar from "../../components/BotonSaludar";
import Contador from "../../components/Contador";

function Home() {
  return (
    <View style={styles.contenedor}>
      <Saludar />
      <BotonSaludar />
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",      
    justifyContent: "center",  
    padding: 10,
    backgroundColor: "#fff"
  }
});

export default Home;
