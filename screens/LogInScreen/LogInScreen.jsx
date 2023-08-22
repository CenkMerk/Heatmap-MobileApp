import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
//SVG
import LoginSvg from "../../assets/LoginSvg";
//component
import ButtonComp from "../../components/ButtonComp/ButtonComp";
//firebase
import { auth } from "../../firebase";
//navigation
import { useNavigation } from "@react-navigation/native";

export default function LogInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("TabNavigation");
      }
    });
  }, []);

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <LoginSvg />
          <View>
            <Text style={styles.textHello}>Hello There 🖐</Text>
            <Text style={styles.title}>Login first to continue</Text>
          </View>
          <View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <ButtonComp
            btnColor="#FF6464"
            btnText="Sign Up"
            btnWidth={327}
            btnClick={handleSignIn}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
