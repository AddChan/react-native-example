import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";

// SectionListExample 대한 설명 블로그는 추후 업로드 될 예정입니다.

const DATA = [
  {
    title: "음식",
    data: ["치킨", "피자", "햄버거"]
  },
  {
    title: "사이드 메뉴",
    data: ["감자 튀김", "치즈 스틱", "콘 샐러드"]
  },
  {
    title: "음료",
    data: ["콜라", "사이다", "환타"]
  }
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function SectionListExample() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32
  },
  title: {
    fontSize: 24
  }
});
