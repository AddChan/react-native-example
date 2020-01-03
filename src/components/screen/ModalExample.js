import React, { Component } from "react";
import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";

// ModalExample 에 대한 설명은 https://csc0705.tistory.com/68 에 있습니다.

class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textButton}>모달 열기</Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.Modalcontainer}>
            <View>
              <Text style={styles.text}>Hello Modal!</Text>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textButton}>모달 닫기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  Modalcontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellowgreen"
  },

  text: {
    fontSize: 22,
    marginTop: 22
  },
  textButton: {
    fontSize: 22,
    marginTop: 22,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ModalExample;
