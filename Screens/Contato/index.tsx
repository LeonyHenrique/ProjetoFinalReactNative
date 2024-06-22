import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function navigateToAbout() {
    navigation.navigate('Sobre');
  }

 
  const cards = [
    {
      id: 1,
      image: require('../../assets/gabriel.png'),
      text: 'bielsolosos',
      icon: require('../../assets/git.png'),
    },
    {
      id: 2,
      image: require('../../assets/amanda.png'),
      text: 'AAlvesAmanda',
      icon: require('../../assets/git.png'),
    },
    {
      
      id: 3,
      image: require('../../assets/leony.jpeg'),
      text: 'LeonyHenrique',
      icon: require('../../assets/git.png'),
    },
  {
    id: 4,
    image: require('../../assets/lucas.png'),
    text: 'LucasTravassos22',
    icon: require('../../assets/git.png'),
  },
{
  id: 5,
  image: require('../../assets/nicolas.png'),
  text: 'Nicolas645',
  icon: require('../../assets/git.png'),
  
},
  
  ];

  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => console.log('Card pressionado')}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.cardText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/image0.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Número de contato</Text>
        <Text style={styles.title}>(808) 812-8383</Text>
     
     
        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          contentContainerStyle={styles.flatListContainer}
        />

      
       
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
    backgroundColor: 'rgba(0, 0, 0, 0.562)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.623)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute', 
    bottom: 10, 
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    backgroundColor: '#0f0f0f50',
    padding: 13,
  },
  cardText: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#0f0f0f70',
    padding: 3,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.425)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Home;
