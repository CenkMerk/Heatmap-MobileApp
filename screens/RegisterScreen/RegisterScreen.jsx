import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import ButtonComp from "../../components/ButtonComp/ButtonComp";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("kullanıcı:", user.email);
      })
      .catch((error) => alert(error.message));

    navigation.navigate("WelcomeScreen");
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.textHello}>Hello There 🖐</Text>
            <Text style={styles.title}>Create an account</Text>
          </View>
          <View>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Şifre"
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
            btnClick={handleSignUp}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
