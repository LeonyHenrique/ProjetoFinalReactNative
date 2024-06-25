import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cards from "../../components/Cards";

export default function Cursos() {
  const navigation = useNavigation();

  return (
    <ImageBackground
    source={require("../../assets/Background.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
      <Cards
        fotoPath={require("../../assets/gabriel.png")}
        nomeCurso={"Fedora Linux Fundamentos"}
        instrutor={"Gabriel Coutinho"}
        avaliacao={4.8}
        numAvaliacoes={18048}
        preco={"145,80"}
      />

      <Cards
        fotoPath={require("../../assets/nicolas.png")}
        nomeCurso={"Cybersecurity"}
        instrutor={"Nicolas Barboza"}
        avaliacao={3.5}
        numAvaliacoes={9569}
        preco={"119,99"}
      />

      <Cards
        fotoPath={require("../../assets/amanda.png")}
        nomeCurso={"Leadership Communication"}
        instrutor={"Amanda Alves"}
        avaliacao={4}
        numAvaliacoes={6902}
        preco={"84,60"}
      />

      <Cards
        fotoPath={require("../../assets/leony.jpeg")}
        nomeCurso={"Inteligência Artificial e Computacional"}
        instrutor={"Leony Santos"}
        avaliacao={4}
        numAvaliacoes={22100}
        preco={"269,99"}
      />

      <Cards
        fotoPath={require("../../assets/lucas.png")}
        nomeCurso={"Design Gráfico"}
        instrutor={"Lucas Travassos"}
        avaliacao={4}
        numAvaliacoes={12006}
        preco={"169,20"}
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
  scrollView:{
    padding: 16,
  },
});
