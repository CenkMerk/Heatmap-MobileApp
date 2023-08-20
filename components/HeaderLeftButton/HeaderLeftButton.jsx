import { TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

export default function HeaderLeftButton() {
  const navigation = useNavigation();

  const HandleClick = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={HandleClick}>
      <View style={styles.container}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}
