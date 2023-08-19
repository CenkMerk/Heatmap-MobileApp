import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
//component
import ButtonComp from "../../components/ButtonComp/ButtonComp";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/bg-photo.png")}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.title}>GeoHeat Maps</Text>
        <Text style={styles.text}>
          Explore Heat Maps based on geographic locations and discover insights
          like never before. Start your exploration now and uncover hidden
          patterns!
        </Text>
        <ButtonComp
          btnText="Login"
          btnColor="#FF6464"
          btnWidth={327}
          btnClick={() => navigation.navigate("LogInScreen")}
        />
        <ButtonComp
          btnText="Sign Up"
          btnColor="#74C6F7"
          btnWidth={327}
          btnMarginTop={10}

          btnClick={() => navigation.navigate("RegisterScreen")}
        />
      </View>
    </ImageBackground>
  );
}
