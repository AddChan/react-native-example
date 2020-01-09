import React, { Component } from "react";
import { View, Image } from "react-native";

// ImageExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

export default class ImageExample extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png"
          }}
        />
        <Image
          style={{ width: 66, height: 58 }}
          source={{
            uri:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="
          }}
        />
      </View>
    );
  }
}
