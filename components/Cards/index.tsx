import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import StarRating from '../Stars/StarRating';
interface CardProps {
  fotoPath: any;
  nomeCurso: string;
  instrutor: string;
  avaliacao: number;
  numAvaliacoes: number;
  preco: string;
}

export default function Cards(props: CardProps){
  const { fotoPath, nomeCurso, instrutor, avaliacao, numAvaliacoes, preco} = props;

  return(
    <View style={styles.card}>
      <Image
      source={fotoPath}
        style={styles.foto}
        resizeMode="cover"
        />
        <View style= {styles.cardContent}>
          <Text style = {styles.titulo}>{nomeCurso}</Text>
          <Text style = {styles.instrutor}>{instrutor}</Text>
          <View style = {styles.avaliacaoContainer}>
            <Text style={styles.avaliacao}>{avaliacao.toFixed(1)}</Text>
            <StarRating rating={avaliacao} />
            <Text style={styles.numAvaliacoes}>({numAvaliacoes.toLocaleString()})</Text>
            </View> 
            <Text style={styles.preco}>{`R$${preco}`}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  foto:{
    width: "100%",
    height: 200,
  },
  cardContent:{
    padding: 16,
  },
  titulo:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  instrutor:{
    fontSize:14,
    color: "#666",
    marginBottom: 8,
  },
  avaliacaoContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avaliacao:{
    fontSize: 14,
    marginRight: 4,
    fontWeight: "bold",
  },
  starIcon:{
    width: 14,
    height: 14,
  },
  numAvaliacoes:{
    fontSize: 14,
    color: "#666",
  },
  preco:{
    fontSize: 16,
    fontWeight: "bold",
  },
});