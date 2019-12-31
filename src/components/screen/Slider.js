import React, { Component } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";

export default class SliderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }

  change = value => {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{value}</Text>
        <Slider
          step={1}
          maximumValue={100}
          onValueChange={this.change}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  text: {
    fontSize: 50,
    textAlign: "center"
  }
});
