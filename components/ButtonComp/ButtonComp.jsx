import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

export default function ButtonComp({
  btnText,
  btnColor,
  btnWidth,
  btnClick,
  btnMarginTop,
}) {
  const buttonBgColor = {
    backgroundColor: btnColor,
    width: btnWidth,
    marginTop: btnMarginTop,
  };

  return (
    <TouchableOpacity
      style={[styles.container, buttonBgColor]}
      onPress={btnClick}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}
