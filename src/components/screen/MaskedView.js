import React from "react";
import { MaskedViewIOS, Text, View } from "react-native";

// MaskedViewExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

class MaskedViewExample extends React.Component {
  render() {
    return (
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: "row", height: "100%" }}
        maskElement={
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 60,
                color: "black",
                fontWeight: "bold"
              }}
            >
              Basic Mask
            </Text>
          </View>
        }
      >
        <View style={{ flex: 1, height: "100%", backgroundColor: "#324376" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F5DD90" }} />
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F76C5E" }} />
      </MaskedViewIOS>
    );
  }
}
export default MaskedViewExample;
