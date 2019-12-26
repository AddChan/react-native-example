import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class Sticky extends Component {
  render() {
    let Data = [
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
      <ScrollView style={styles.container} stickyHeaderIndices={[2]}>
        {Data.map((el, index) => {
          return (
            <View style={{ height: 200 }}>
              <Text key={index}>{el}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Sticky;
