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
import HeaderLeftButton from "../components/HeaderLeftButton/HeaderLeftButton";
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#F6F6F6",
            },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Sign Up",
            headerStyle: {
              backgroundColor: "#F6F6F6",
            },
            headerShadowVisible: false,
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
