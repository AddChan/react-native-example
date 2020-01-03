import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Alert } from "react-native";

export default class FlatListExample extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  getListViewItem = item => {
    Alert.alert(item.key);
  };

  render() {
    let Data = [
      { key: "Android" },
      { key: "iOS" },
      { key: "Java" },
      { key: "Swift" },
      { key: "Php" },
      { key: "Hadoop" },
      { key: "Sap" },
      { key: "Python" },
      { key: "Ajax" },
      { key: "C++" },
      { key: "Ruby" },
      { key: "Rails" },
      { key: ".Net" },
      { key: "Perl" },
      { key: "Sap" },
      { key: "Python" },
      { key: "Ajax" },
      { key: "C++" },
      { key: "Ruby" },
      { key: "Rails" },
      { key: ".Net" },
      { key: "Perl" }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={() => this.getListViewItem(item)}
            >
              {item.key}
            </Text>
          )}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
