import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Main 페이지 입니다.</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("login");
            }}
          >
            <Text style={styles.btnText}>Login Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("regi");
            }}
          >
            <Text style={styles.btnText}>Regi Screen</Text>
          </TouchableOpacity>
        </View>
        {/* <View> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Button");
          }}
        >
          <Text style={styles.btnText}>Button Screen</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    marginTop: "50%",
  },
  btnView: {
    flexDirection: "row",
  },
  button: {
    margin: 15,
    width: 120,
    height: 50,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default MainPage;
