import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class LoginPage extends Component {
  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Text>Login 화면</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default LoginPage;
