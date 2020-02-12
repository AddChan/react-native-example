import React, { Component } from "react";
import { TextInput } from "react-native";

// TextInputExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

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
