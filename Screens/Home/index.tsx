import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackGroundFont from "../../components/BackGroundFont";
import Logo from "../../components/Logo";
import { Scroll } from "../../components/BackGroundFont/styles";

//Quem que fez isso aqui???w
//const Home: React.FC = () => {
export default function Home(){
  const navigation = useNavigation();


  return (
    <ScrollView>
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={{flex: 1}}>
        <Logo></Logo>
        
      <BackGroundFont
        titulo="Quem Somos:"
        conteudo1="
      A Tech Cursos é uma plataforma de especializada em cursos online de tecnologia. Fundada por especialistas da área, nossa missão é democratizar o acesso ao conhecimento técnico e capacitar pessoas globalmente para atingir seus objetivos profissionais.
      "
        subTitulo="Nossa Filosofia"
        conteudo2="Acessibilidade: Cursos de qualidade para todos, independente de localização ou nível de experiência."
        conteudo3="Excelência: Conteúdos atualizados desenvolvidos por profissionais renomados"
      />
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.226)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: 40,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 50,
    marginTop: 500,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.425)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

