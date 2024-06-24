import { StyleSheet, Image } from "react-native";
import React from "react";
import { LimitandoLogo } from "./styles";

export default function Logo() {
  return (
    <LimitandoLogo>
    <Image
      source={require("../../assets/Logo.png")}
      style={styles.backgroundImage}
    ></Image>
    </LimitandoLogo>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
});