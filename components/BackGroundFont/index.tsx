import { View, Text } from "react-native";
import {
  FundoTitulo,
  ConteudoTitulo,
  Btext,
  Utext,
  Scroll,
  SubTitulo,
} from "./styles";
import React from "react";
import * as Animatable from 'react-native-animatable';


export default function BackGroundFont(props: {
  titulo: string;
  subTitulo: string;
  conteudo1: string;
  conteudo2: string;
  conteudo3: string;
}) {
  //Vi isso na internet e funcinou bem como eu gostaria!
  const { titulo, conteudo1, subTitulo, conteudo2, conteudo3 } = props;

  return (
    <FundoTitulo>
      <Animatable.Text 
      style={{
        fontSize:30,
        fontStyle: "italic",
        marginBottom: 30,
      }}
      animation="fadeIn"
      iterationCount={Infinity}
      delay={200}

      
      
      > {titulo} </Animatable.Text>
      <ConteudoTitulo>
        <Scroll>
          <Btext> {conteudo1} </Btext>
          <SubTitulo>{`         ${subTitulo}`}</SubTitulo>
          <Text>{`\u2022   ${conteudo2}`} </Text>
          <Text>{`\u2022   ${conteudo3}`} </Text>

        </Scroll>
      </ConteudoTitulo>
    </FundoTitulo>
  );
}
