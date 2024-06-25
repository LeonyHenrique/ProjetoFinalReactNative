import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import HandleConectado from "../../components/HandleConectado";
import { db } from "../../firebaseConnection";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const auth = getAuth();


  function handleLogin() {
    const Auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        alert('Usuario Logado ')
        console.log("Usuario logado:", user);
        setLoginSuccess(true);
      })
      .catch((error: FirebaseError) => {
        console.error("Erro ao fazer login:", error.message);
        setLoginSuccess(false);
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
        <HandleConectado />
        <View style={styles.container}>
          <Text style={styles.title}>{`Login`}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              textContentType="password"
              style={styles.input}
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
              <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>
              Ainda não tem uma conta Tech Cursos? Clique no botão abaixo para
              se cadastrar.
            </Text>
            <TouchableOpacity
              style={styles.botaoDois}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Text style={styles.botaoTexto}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

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
  bottomContainer: {
    width: "100%",
    padding: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
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
