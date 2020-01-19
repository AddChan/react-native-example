import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

class SafeAreaViewExample extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>SafeAreaViewExample</Text>
        </View>
      </SafeAreaView>
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

export default SafeAreaViewExample;
