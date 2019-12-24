import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TouchableButton = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.handlePress(props.title)}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#000000",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
