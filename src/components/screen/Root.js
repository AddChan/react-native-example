import React from "react";
import { StyleSheet, View } from "react-native";
import TouchableButton from "../shared/TouchableButton";

const Root = props => {
  // 네비게이션으로 id값에 this.props.title값을 주어서 넘겨주기

  handlePress = title => {
    // console.log(title);
    props.navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <TouchableButton title={"ScrollTo"} handlePress={handlePress} />
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
