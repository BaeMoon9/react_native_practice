import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  YellowBox,
} from "react-native";

// const Separator = () => <View style={styles.separator} />;

class ButtonPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToTextTop}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleTop}
            onPress={() => {
              this.props.navigation.navigate("self");
            }}
          >
            <Text>스마트폰</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.TouchableOpacityStyleTop}
            onPress={() => Alert.alert("운동화")}
          >
            <Text>운동화</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fixToTextMiddle}>
          <Text style={styles.title}></Text>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleMiddle}
            onPress={() => {
              this.props.navigation.navigate("image");
            }}
          >
            <Text>손소독제</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleMiddle}
            onPress={() => {
              this.props.navigation.navigate("water");
            }}
          >
            <Text>생수</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleMiddle}
            onPress={() => Alert.alert("칫솔")}
          >
            <Text>칫솔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fixToTextBottom}>
          <Text style={styles.title}></Text>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleBottom}
            color="#f194ff"
            onPress={() => {
              this.props.navigation.navigate("egg");
            }}
          >
            <Text>계란</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToTextTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "gray",
  },
  fixToTextMiddle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#4ebd7a",
  },
  fixToTextBottom: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TouchableOpacityStyleTop: {
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    width: "48%",
    height: "95%",
    margin: "2%",
  },
  TouchableOpacityStyleMiddle: {
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    width: "30%",
    height: "95%",
    margin: "2%",
  },
  TouchableOpacityStyleBottom: {
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    width: "95%",
    height: "95%",
    margin: "2%",
  },
});

export default ButtonPage;
