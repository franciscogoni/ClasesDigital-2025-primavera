import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DynamicForm from "../components/DynamicForm";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido</Text>

      <DynamicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
