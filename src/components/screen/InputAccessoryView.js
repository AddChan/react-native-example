import React, { Component } from "react";
import {
  View,
  ScrollView,
  TextInput,
  InputAccessoryView,
  Button
} from "react-native";

// InputAccessoryViewExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

export default class InputAccessoryViewExample extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Placeholder Text" };
  }

  render() {
    const inputAccessoryViewID = "uniqueID";
    return (
      <View>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={{
              padding: 10,
              paddingTop: 50
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            onPress={() => this.setState({ text: "Placeholder Text" })}
            title="Reset Text"
          />
        </InputAccessoryView>
      </View>
    );
  }
}
