import React, { Component } from "react";
import { ProgressBarAndroid, StyleSheet, View } from "react-native";

// ProgressBarAndroidExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

export default class ProgressBarAndroidExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});
