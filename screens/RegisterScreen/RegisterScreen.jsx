import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import React from "react";
import styles from "./style";
import ButtonComp from "../../components/ButtonComp/ButtonComp";

export default function RegisterScreen() {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.textHello}>Hello There 🖐</Text>
            <Text style={styles.title}>Create an account</Text>
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
