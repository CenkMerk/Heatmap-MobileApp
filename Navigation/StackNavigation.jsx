import { View, Text } from "react-native";
import React from "react";
//screens
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LogInScreen from "../screens/LogInScreen/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import TabNavigation from "./TabNavigation";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
