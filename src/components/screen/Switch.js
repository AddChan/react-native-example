import React, { Component } from "react";
import { View, StyleSheet, Switch } from "react-native";

// SwitchExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

export default class SwitchExample extends Component {
  constructor() {
    super();
    this.state = {
      switchValue: false
    };
  }
  onValueChange = value => {
    this.setState({ switchValue: value });
  };
  render() {
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={this.onValueChange}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100
  }
});
