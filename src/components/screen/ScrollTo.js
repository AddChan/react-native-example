import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

// Scroll To 에 대한 설명은 https://csc0705.tistory.com/65 에 있습니다.

class ScrollTo extends Component {
  handleButtonPress = () => {
    this.scrollView.scrollTo({
      y: 0
    });
  };

  render() {
    return (
      <ScrollView ref={ref => (this.scrollView = ref)}>
        <View style={styles.itemContainer}>
          <Text style={styles.Text}>아래로 스크롤 해주세요</Text>
        </View>
        <View style={styles.itemContainer2} />

        <TouchableOpacity
          onPress={this.handleButtonPress}
          style={styles.buttonContainer}
        >
          <Text style={styles.Text}>스크롤 맨 위로 이동</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    height: 600,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "yellowgreen"
  },
  itemContainer2: {
    width: "100%",
    height: 600,
    borderWidth: 1,
    backgroundColor: "green"
  },
  buttonContainer: {
    height: 80,
    borderWidth: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ScrollTo;
