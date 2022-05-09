import "react-native-gesture-handler";
import React, { Component } from "react";
import { Animated, StyleSheet, View, Easing } from "react-native";

class Egg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spinValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    // 애니메이션을 설정한다.
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  render() {
    // 회전 애니매이션을 수행한다.
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <View style={styles.container}>
        <Animated.Image
          style={{ transform: [{ rotate: spin }] }}
          source={require("./heos.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  box: {
    width: 80,
    height: 80,
  },
});

export default Egg;
