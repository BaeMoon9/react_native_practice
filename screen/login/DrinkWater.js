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
  Image,
} from "react-native";

class DrinkWater extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    if (this.state.count == 0) {
    }
  }

  onPressDrinkWater = () => {
    this.setState({
      count: this.state.count + 1,
    });
    if (this.setState.count == 0) {
      //이미지1
    } else if (this.setState.count == 1) {
      //이미지2
    } else if (this.setState.count == 2) {
      //이미지3
    } else if (this.setState.count == 3) {
      //이미지4
    } else if (this.setState.count == 4) {
      //이미지5
    } else {
      //이미지6
    }
  };
  onPressReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.fixToTextWater}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleWater}
            onPress={this.onPressReset}
          >
            <Text style={[styles.countText]}>
              Water Drinked : {this.state.count ? this.state.count : null}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fixToTextButton}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyleButton}
            onPress={this.onPressDrinkWater}
          >
            <Text style={[styles.countText]}>물마시기</Text>
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
    marginHorizontal: "2%",
    marginVertical: "2%",
  },
  fixToTextWater: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "yellow",
  },
  fixToTextButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "skyblue",
  },
  TouchableOpacityStyleWater: {
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    width: "95%",
    height: "96%",
    margin: "2%",
  },
  TouchableOpacityStyleButton: {
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    width: "96%",
    height: "94%",
    margin: "2%",
  },
  countText: {
    color: "#FF00FF",
    textAlign: "center",
  },
});

export default DrinkWater;
