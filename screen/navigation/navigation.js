import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../main/MainPage.js";
import LoginPage from "../login/LoginPage.js";
import RegiPage from "../login/RegiPage.js";
import ButtonPage from "../login/ButtonPage.js";
import DrinkWater from "../login/DrinkWater.js";
import Egg from "../login/Egg.js";
import SelfDiagnosis from "../main/SelfDiagnosis.js";
import ImageEx from "../main/ImageEx.js";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={MainPage} />
          <Stack.Screen name="login" component={LoginPage} />
          <Stack.Screen name="regi" component={RegiPage} />
          <Stack.Screen
            name="Button"
            component={ButtonPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="water" component={DrinkWater} />
          <Stack.Screen name="egg" component={Egg} />
          <Stack.Screen name="self" component={SelfDiagnosis} />
          <Stack.Screen name="image" component={ImageEx} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
