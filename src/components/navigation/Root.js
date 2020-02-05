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
      <TouchableButton title={"Sticky"} handlePress={handlePress} />
      <TouchableButton title={"OnLayout"} handlePress={handlePress} />
      <TouchableButton title={"Modal"} handlePress={handlePress} />
      <TouchableButton title={"Slider"} handlePress={handlePress} />
      <TouchableButton title={"Switch"} handlePress={handlePress} />
      <TouchableButton title={"FlatList"} handlePress={handlePress} />
      <TouchableButton title={"TouchableOpacity"} handlePress={handlePress} />
      <TouchableButton title={"ActivityIndicator"} handlePress={handlePress} />
      <TouchableButton title={"ImageExample"} handlePress={handlePress} />
      <TouchableButton title={"Shadow"} handlePress={handlePress} />
      <TouchableButton title={"ImageRatio"} handlePress={handlePress} />
      <TouchableButton title={"SafeAreaView"} handlePress={handlePress} />
      <TouchableButton title={"DatePickerIOS"} handlePress={handlePress} />
      <TouchableButton title={"RefreshControl"} handlePress={handlePress} />
      <TouchableButton
        title={"KeyboardAvoidingView"}
        handlePress={handlePress}
      />
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
