import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// 안드로이드, IOS 모두 작업해 주어야 합니다.

class Shadow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>shadow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default Shadow;
