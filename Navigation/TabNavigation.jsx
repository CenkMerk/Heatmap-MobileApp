import { View, Text } from "react-native";
import React from "react";
//screens
import LogOutScreen from "../screens/LogOutScreen/LogOutScreen";
import MapScreen from "../screens/MapScreen/MapScreen";
//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
//icons
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6464",
      }}
    >
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marked-alt" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LogOutScreen"
        component={LogOutScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="logout" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
