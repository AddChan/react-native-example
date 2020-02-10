import React, { Component } from "react";
import { TextInput } from "react-native";

export default function TextInputExample() {
  const [value, onChangeText] = React.useState("Placeholder");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
