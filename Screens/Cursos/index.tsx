import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cards from "../../components/Cards";

export default function Cursos() {
  const navigation = useNavigation();

  function navegarAjuda() {
    navigation.navigate("Contato");
  }

  return (
    <ImageBackground
    source={require("../../assets/Background.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
    >
      <ScrollView>
      <Cards
        fotoPath={require("../../assets/gabriel.png")}
        nomeCurso={"tete de estelionato"}
        preco={"200"}
      />

      <Cards
        fotoPath={require("../../assets/icon.png")}
        nomeCurso={"tete de estelionato"}
        preco={"200"}
      />
       <Cards
        fotoPath={require("../../assets/icon.png")}
        nomeCurso={"tete de estelionato"}
        preco={"200"}
      />
       <Cards
        fotoPath={require("../../assets/icon.png")}
        nomeCurso={"tete de estelionato"}
        preco={"200"}
      />
       <Cards
        fotoPath={require("../../assets/icon.png")}
        nomeCurso={"tete de estelionato"}
        preco={"200"}
      />
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
