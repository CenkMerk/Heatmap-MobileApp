import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import styles from "./style";
import LoginSvg from "../../assets/LoginSvg";
import ButtonComp from "../../components/ButtonComp/ButtonComp";

export default function LogInScreen() {
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
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput
              placeholder="Şifre"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <ButtonComp btnColor="#FF6464" btnText="Sign Up" btnWidth={327} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
