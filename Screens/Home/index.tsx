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
import HandleConectado from "../../components/HandleConectado";


export default function Home(){
  const navigation = useNavigation();


  return (
      
    <ImageBackground
    source={require("../../assets/Background.png")}
    style={styles.backgroundImage}
    resizeMode="cover"
    >
      <HandleConectado/>
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
        conteudo4="Flexibilidade: Aprenda no seu ritmo, a qualquer hora e lugar."
        conteudo5="Inovação: Utilizamos tecnologias e metodologias avançadas para uma experiência de aprendizado envolvente."
        subSubTitulo="Junte-se a Nós"
        conteudo6="Explore nossos cursos e alcance suas metas educacionais e profissionais. Para mais informações, entre em contato conosco.
"


      />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  }
});

