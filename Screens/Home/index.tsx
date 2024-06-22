import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function navegarAjuda() {
    navigation.navigate('Sobre');
  }

  return (
    <ImageBackground
      source={require('../../assets/image0.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hotel Aloha Hawaii</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={navegarAjuda}>
            <Text style={styles.buttonText}>Saiba mais</Text>
          </TouchableOpacity>
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
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.226)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
    marginTop:40
    
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop:500
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.425)', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', 
  },
});

export default Home;
