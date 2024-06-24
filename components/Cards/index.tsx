import { View, Text } from "react-native";
import React from "react";
import { Card, Foto, Titulo, Preco } from "./styles";

export default function Cards(props: {
  fotoPath: string;
  nomeCurso: string;
  preco: string;
}) {
  const { fotoPath, nomeCurso, preco } = props;

  return (
    <Card animation="fadeInUp">
      <Foto
        source={fotoPath}
        resizeMode="center"
      />
      <Titulo>{nomeCurso}</Titulo>
      <Preco>{`${preco} R$`}</Preco>
    </Card>
  );
}
