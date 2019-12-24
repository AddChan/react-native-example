import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TouchableButton = props => {
  // 네비게이션으로 id값에 this.props.title값을 주어서 넘겨주기
  handlePress = () => {
    console.log(props.title);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
