import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

class ScrollTo extends Component {
  render() {
    var Data = [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7",
      "item 8",
      "item 9",
      "item 10",
      "item 11",
      "item 12",
      "item 13",
      "item 14",
      "item 15"
    ];
    return (
      <ScrollView>
        <View style={styles.container}>
          {Data.map((el, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemText}>{el}</Text>
              </View>
            );
          })}
        </View>
        <Button title={"맨 위로 이동"} onPress={this.handleButtonPress} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemContainer: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemText: {
    fontSize: 20
  },
  buttonContainer: {
    height: 80
  }
});

export default ScrollTo;
