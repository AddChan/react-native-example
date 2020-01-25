//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// 꽉찬 이미지를 사용하면 디바이스 마다 비율이 달라서 이미지가 깨지는 경우가 있습니다.
// ImageRatio는 이미지의 비율을 유지하면서 이미가 꽉차게 하는 예제입니다.

class ImageRatio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ImageRatio</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    aspectRatio: 3 / 2 // 가로 세로 비율이 3 / 2 로 적용됩니다.
  }
});

export default ImageRatio;
