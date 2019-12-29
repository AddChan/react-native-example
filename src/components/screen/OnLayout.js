import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// OnLayout 에 대한 설명은 https://csc0705.tistory.com/67 에 있습니다.

class OnLayout extends Component {
  state = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  };

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
      x: e.nativeEvent.layout.x,
      y: e.nativeEvent.layout.y
    });
  };

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Text style={styles.text}>
          width: {this.state.width}
          {`\n`}
          height: {this.state.height}
          {`\n`}
          x: {this.state.x}
          {`\n`}
          y: {this.state.y}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    backgroundColor: "yellowgreen",
    marginTop: 100,
    marginLeft: 50
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default OnLayout;
