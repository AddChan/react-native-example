import React, { Component } from "react";
import { View, StyleSheet, Switch } from "react-native";

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
