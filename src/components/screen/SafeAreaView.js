import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// 아이폰X 부터는 노치 디자인이 적용되어, 컴포넌트 생성시 이상해집니다.
// 따라서 SafeAreaView를 사용하여, 노치 디자인에 의해 안 보이는 영역으로 컴포넌트가 렌더링되지 않도록 해주는 것입니다.

// SafeAreaView 대한 설명 블로그는 추후 업로드 될 예정입니다.
class SafeAreaViewExample extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>SafeAreaViewExample</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default SafeAreaViewExample;
