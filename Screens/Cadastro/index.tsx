import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import HandleConectado from "../../components/HandleConectado";
import { db } from "../../firebaseConnection";
import {addDoc, collection, doc, getDoc} from "firebase/firestore"

export default function Cadastro(data: { id: string; }){
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

useEffect(() => {
  async function getCad() {
    const docref = doc(db, "user", data.id);
    getDoc(docref).then((snapshot) =>{
      console.log(snapshot.data());
    }).catch(()=>{
      console.log("erro ao buscar dados");
    })
  }
  getCad();
})
async function handleCadastro() {
  await addDoc(collection(db, "user"),{
    nome: nome,
    email: email,
    senha: senha,
  }).then(() =>{
    console.log("Cadastro Realizado!");
    setNome("");
    setEmail("");
    setSenha("");
  })
  .catch((err) =>{
    console.log("Erro ao cadastrar: " + err);
  });
}

  return (
    <ImageBackground
      source={require("../../assets/Background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
      >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <HandleConectado/>
        <View style={styles.container}>
          <Text style={styles.title}>{`Cadastro`}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite uma senha"
              value={senha}
              onChangeText={(text) => setSenha}
            />
            <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
              <Text style={styles.botaoTexto}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    maxWidth: 320,
    padding: 20,
    backgroundColor: "#eff1efd5",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#eff1efd5",
  },
  botao: {
    backgroundColor: "#000",
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  botaoTexto: {
    color: "#fff",
  },
  bottomText: {
    fontSize: 18,
    marginBottom: 20,
  },
  botaoDois: {
    backgroundColor: "#000",
    height: 40,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});