import React from "react";
import { StyleSheet, View } from "react-native";
import TouchableButton from "../shared/TouchableButton";

const Root = props => {
  handlePress = title => {
    props.navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <Text>S</Text>
      <TouchableButton title={"ScrollTo"} handlePress={handlePress} />
      <TouchableButton title={"Sticky"} handlePress={handlePress} />
      <TouchableButton title={"Slider"} handlePress={handlePress} />
      <TouchableButton title={"Switch"} handlePress={handlePress} />
      <TouchableButton title={"SafeAreaView"} handlePress={handlePress} />
      <TouchableButton title={"SectionList"} handlePress={handlePress} />
      <TouchableButton title={"SectionList"} handlePress={handlePress} />
      <TouchableButton title={"Shadow"} handlePress={handlePress} />
      <Text>O</Text>
      <TouchableButton title={"OnLayout"} handlePress={handlePress} />
      <Text>M</Text>
      <TouchableButton title={"Modal"} handlePress={handlePress} />
      <TouchableButton title={"MaskedView"} handlePress={handlePress} />
      <Text>R</Text>
      <TouchableButton title={"RefreshControl"} handlePress={handlePress} />
      <Text>F</Text>
      <TouchableButton title={"FlatList"} handlePress={handlePress} />
      <Text>I</Text>
      <TouchableButton title={"ImageRatio"} handlePress={handlePress} />
      <TouchableButton title={"ImageExample"} handlePress={handlePress} />
      <TouchableButton title={"InputAccessoryView"} handlePress={handlePress} />
      <Text>A</Text>
      <TouchableButton title={"ActivityIndicator"} handlePress={handlePress} />
      <Text>D</Text>
      <TouchableButton title={"DatePickerIOS"} handlePress={handlePress} />
      <Text>P</Text>
      <TouchableButton title={"ProgressBarAndroid"} handlePress={handlePress} />
      <Text>T</Text>
      <TouchableButton title={"TouchableOpacity"} handlePress={handlePress} />
      <TouchableButton title={"TextInput"} handlePress={handlePress} />
      <TouchableButton title={"Text"} handlePress={handlePress} />
      <TouchableButton title={"TouchableHighlight"} handlePress={handlePress} />
      <Text>B</Text>
      <TouchableButton title={"Button"} handlePress={handlePress} />
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
