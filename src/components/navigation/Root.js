import React from "react";
import { StyleSheet, View } from "react-native";
import TouchableButton from "../shared/TouchableButton";

const Root = props => {
  handlePress = title => {
    props.navigation.navigate(title);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>A</Text>
      <TouchableButton title={"AsyncStorage"} handlePress={handlePress} />
      <TouchableButton title={"ActivityIndicator"} handlePress={handlePress} />
      <Text style={styles.Title}>B</Text>
      <TouchableButton title={"Button"} handlePress={handlePress} />
      <Text style={styles.Title}>D</Text>
      <TouchableButton title={"DatePickerIOS"} handlePress={handlePress} />
      <TouchableButton title={"Dimensions"} handlePress={handlePress} />
      <Text style={styles.Title}>F</Text>
      <TouchableButton title={"FlatList"} handlePress={handlePress} />
      <Text style={styles.Title}>I</Text>
      <TouchableButton title={"ImageRatio"} handlePress={handlePress} />
      <TouchableButton title={"ImageExample"} handlePress={handlePress} />
      <TouchableButton title={"InputAccessoryView"} handlePress={handlePress} />
      <Text style={styles.Title}>M</Text>
      <TouchableButton title={"Modal"} handlePress={handlePress} />
      <TouchableButton title={"MaskedView"} handlePress={handlePress} />
      <Text style={styles.Title}>O</Text>
      <TouchableButton title={"OnLayout"} handlePress={handlePress} />
      <Text style={styles.Title}>K</Text>
      <TouchableButton title={"Keyboard"} handlePress={handlePress} />
      <Text style={styles.Title}>P</Text>
      <TouchableButton title={"ProgressBarAndroid"} handlePress={handlePress} />
      <Text style={styles.Title}>R</Text>
      <TouchableButton title={"RefreshControl"} handlePress={handlePress} />
      <Text style={styles.Title}>S</Text>
      <TouchableButton title={"ScrollTo"} handlePress={handlePress} />
      <TouchableButton title={"Sticky"} handlePress={handlePress} />
      <TouchableButton title={"Slider"} handlePress={handlePress} />
      <TouchableButton title={"Switch"} handlePress={handlePress} />
      <TouchableButton title={"SafeAreaView"} handlePress={handlePress} />
      <TouchableButton title={"SectionList"} handlePress={handlePress} />
      <TouchableButton title={"SectionList"} handlePress={handlePress} />
      <TouchableButton title={"Shadow"} handlePress={handlePress} />
      <TouchableButton title={"ScrollView"} handlePress={handlePress} />
      <TouchableButton title={"Share"} handlePress={handlePress} />
      <Text style={styles.Title}>T</Text>
      <TouchableButton title={"TouchableOpacity"} handlePress={handlePress} />
      <TouchableButton title={"TextInput"} handlePress={handlePress} />
      <TouchableButton title={"Text"} handlePress={handlePress} />
      <TouchableButton title={"TouchableHighlight"} handlePress={handlePress} />
      <TouchableButton title={"ToastAndroid"} handlePress={handlePress} />
      <Text style={styles.Title}>V</Text>
      <TouchableButton title={"View"} handlePress={handlePress} />
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
  },
  Title: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
