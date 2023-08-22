import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
//firebase
import { auth } from "../../firebase";
import { deleteLocations } from "../../api/http";
//navigation
import { useNavigation } from "@react-navigation/native";
//component
import ButtonComp from "../../components/ButtonComp/ButtonComp";

export default function LogOutScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("WelcomeScreen");
        setTimeout(() => {
          deleteLocations();
        }, 10000);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
      <ButtonComp
        btnText="Sign Out"
        btnColor="#FF6464"
        btnWidth={327}
        btnMarginTop={50}
        btnClick={handleSignOut}
      />
    </View>
  );
}
