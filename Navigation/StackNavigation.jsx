import React from "react";
//screens
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import LogInScreen from "../screens/LogInScreen/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import TabNavigation from "./TabNavigation";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//component
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
            headerTitleAlign: 'center',
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
            headerTitleAlign: 'center',
            headerLeft: () => <HeaderLeftButton />,
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
