import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// 안드로이드, IOS 모두 작업해 주어야 합니다.

class Shadow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>ShadowBox</Text>
        </View>
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
  },
  wrapper: {
    width: 250,
    height: 250,
    elevation: 10, // 안드로이드의 경우 elevation 속성을 사용합니다 단, IOS는 적용 안됩니다.

    shadowOffset: { width: 10, height: 10 }, // shadow 속성은 IOS에서만 적용됩니다.
    shadowColor: "black",
    shadowOpacity: 1.0
  }
});

export default Shadow;
