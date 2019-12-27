import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Sticky 에 대한 설명은 https://csc0705.tistory.com/66 에 있습니다.
class Sticky extends Component {
  render() {
    let Data = [
      "item 1",
      "Sticky",
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
      <ScrollView stickyHeaderIndices={[1]}>
        {Data.map((el, index) => {
          return (
            <View style={styles.itemContainer} key={index}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                {el}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 120,
    borderWidth: 2,
    backgroundColor: "white"
  }
});

export default Sticky;
