import React, { Component } from "react";
import { View, Button, ToastAndroid } from "react-native";

// a component that calls the imperative ToastAndroid API
const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

class ToastAndroidExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleButtonPress = () => {
    this.setState(
      {
        visible: true
      },
      () => {
        this.hideToast();
      }
    );
  };

  hideToast = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Toast visible={this.state.visible} message="Example" />
        <Button title="버튼" onPress={this.handleButtonPress} />
      </View>
    );
  }
}

export default ToastAndroidExample;
