import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function navigateToAbout() {
    navigation.navigate('Sobre');
  }
  return (
    <ImageBackground
      source={require('../../assets/Background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
       
        <View style={styles.container}>
        <Text style={styles.header}>Contato: </Text>
       
          <Text style={styles.contactBox}>
          Se você ainda tem dúvidas ou problemas, estamos aqui para ajudar.
            Nossa equipe de atendimento ao cliente está disponível para garantir
            que você tenha a melhor experiência possível. Por favor, entre em
            contato conosco através das opções abaixo.
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.contato}>Telefone:</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.contato}> (11) 98765-4321</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.contato}>E-mail:</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.contato}> contato@techcursos.com.br</Text>
            </Text>
       

         
      
        <Text style={styles.header}>Endereço:</Text>
        <View style={styles.addressBox}>
          <Text style={styles.contato}>
            Tech Cursos Ltda. Rua Inovação, 123, Bairro Tecnológico, Cidade do Futuro, TE 45678-910, Brasil
          </Text>

        </View>   
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    transform: [{ scale: 1.09 }]
  
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.219)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  
  },
  header: {
    fontSize: 30,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  container: {
    width: '90%',
    height:'85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff1efd5',
    borderWidth:1
  

  },
  contactBox: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    marginBottom: 20,
    width: '90%',
    height:'50%',
    alignItems: 'center',
    borderWidth:1,
    textAlign:'center',
  },
  addressBox: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    borderWidth:1,
    width: '90%',
    textAlign: 'center'
  },
  contactText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  contato: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
    
    
  },
});

export default Home;
