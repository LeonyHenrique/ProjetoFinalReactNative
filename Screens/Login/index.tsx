import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function navegarAjuda() {
    navigation.navigate('Ajuda');
  }

  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
     <View style={styles.container}>
     <Text style={styles.title}>Login:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Digite seu email'
            //value={email}
            //onChangeText={}
            /> 
          <TextInput 
            style={styles.input}
            placeholder='Digite sua senha'
            //value={senha}
            //onChangeText={}
            />
            <TouchableOpacity style={styles.botao} /*</View>onPress={}*/>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Ainda não tem uma conta Tech Cursos? Clique no botão abaixo para se cadastrar.</Text>
          <TouchableOpacity style={styles.botaoDois} /*onPress={handleRegister}*/>
            <Text style={styles.botaoTexto}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'center',
    transform: [{ scale: 1.09 }],
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 555,
    maxWidth: 320,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#eff1efd5',
    borderColor: '#000',
    borderWidth: 1,
  },
  title: {
    marginTop: -22,
    fontSize: 40,
  },
  inputContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 0,
    padding: 30,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    maxHeight: 600,
  },
  largeText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 30,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: '#eff1efd5',
    borderColor: '#000',
    color: '#fff'
  },
  botao: {
    backgroundColor: "#000",
    height: 40,
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginTop: 20
  },
  botaoTexto: {
    color: "#fff",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 205,
    minWidth: 261,
    marginBottom: -10,
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  bottomText: {
    padding: 10,
    fontSize: 22,
    color: "#000",
  },
  botaoDois: {
    backgroundColor: "#000",
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    margin: 15,
  }
});

export default Home;
