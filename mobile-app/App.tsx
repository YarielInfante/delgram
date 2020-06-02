import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import { View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./app/screens/RegisterScreen";

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "black",
    background: "white",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "white",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ title: "" }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{
            title: "",
          }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
