import React from "react";
import { StyleSheet, View } from "react-native";
import TouchableButton from "../shared/TouchableButton";

const Root = props => {
  handlePress = title => {
    props.navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <TouchableButton title={"ScrollTo"} handlePress={handlePress} />
      <TouchableButton title={"FlatList"} handlePress={handlePress} />
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
