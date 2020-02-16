import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// KeyboardAvoidingViewExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

const KeyboardAvoidingViewExample = () => {
  state = {
    text: ""
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.form}>
      <TextInput
        style={styles.input}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        placeholder="text"
      />
      <View>
        <Text>KeyboardAvoidingView Example</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16
  }
});

export default KeyboardAvoidingViewExample;
