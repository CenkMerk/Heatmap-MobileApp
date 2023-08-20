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

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6464",
      }}
    >
      <Tab.Screen name="MapScreen" component={MapScreen} />
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
