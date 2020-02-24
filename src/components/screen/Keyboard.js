import React, { Component } from "react";
import { Keyboard, TextInput } from "react-native";

// KeyboardExample 대한 설명 블로그는 추후 업로드 될 예정입니다.
export default class KeyboardExample extends Component {
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    alert("키보드 On!");
  }

  _keyboardDidHide() {
    alert("키보드 Off!");
  }

  render() {
    return <TextInput onSubmitEditing={Keyboard.dismiss} />;
  }
}
