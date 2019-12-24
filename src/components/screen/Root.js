import React from "react";
import { StyleSheet, View } from "react-native";
import TouchableButton from "../shared/TouchableButton";

const Root = () => {
  return (
    <View style={styles.container}>
      <TouchableButton title={"ScrollTo"} />
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
