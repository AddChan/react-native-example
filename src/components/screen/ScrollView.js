import React, { Component } from "react";
import { ScrollView, Image, Text, StyleSheet } from "react-native";

// ScrollViewExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>스크롤 해주세요</Text>
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />

        <Text style={{ fontSize: 96 }}>계속 ...</Text>
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Text style={styles.title}>아래로 스크롤 해주세요</Text>
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Text style={styles.title}>계속 ...</Text>
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
        <Image
          source={{
            uri: "https://facebook.github.io/react-native/img/tiny_logo.png",
            width: 64,
            height: 64
          }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 96
  }
});
