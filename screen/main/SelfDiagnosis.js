import React from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// import { Dimensions } from "react-native-web";

export default class SelfDiagnosis extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  render() {
    const animationStyles = {
      transform: [
        {
          rotateX: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
          }),
        },
      ],
    };

    return (
      <View>
        <View style={objectStyles.view}>
          <Animated.View style={[objectStyles.object, animationStyles]}>
            <Text style={objectStyles.textBox}>Hello</Text>
          </Animated.View>
        </View>
        <View>
          <TouchableOpacity style={objectStyles.button}></TouchableOpacity>
          <TouchableOpacity style={objectStyles.button}></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const objectStyles = {
  view: {
    width: Dimensions.get("screen").width * 1.0,
    height: Dimensions.get("screen").height * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  object: {
    backgroundColor: "orange",
    width: 100,
    height: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  textBox: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    padding: 5,
  },
  button: {
    width: "50%",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
};
