import { View, Text } from "react-native";
import React from "react";
//screens
import LogOutScreen from "../screens/LogOutScreen/LogOutScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="LogOutScreen" component={LogOutScreen} />
    </Tab.Navigator>
  );
}
