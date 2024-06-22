import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function navegarAjuda() {
    navigation.navigate('Ajuda');
  }

  return (
    <ImageBackground
      source={require('../../assets/image0.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
     <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Endereço:</Text>
        <Text style={styles.text}>
        1234 Paradise Avenue,{'\n'}
            Waikiki Beach, Honolulu, HI 96815,{'\n'}
            Havaí, EUA
          </Text>
          
          <Text style={styles.title}>História do Hotel Aloha Hawaii:</Text>
          <Text style={styles.text}>  Fundado em 1922, o Hotel Aloha Hawaii é um ícone de luxo e hospitalidade na bela praia de Waikiki. Com uma arquitetura majestosa que combina o charme clássico com influências havaianas, nosso hotel tem sido um refúgio para viajantes de todo o mundo há mais de um século. Originalmente construído como um retiro exclusivo para a realeza havaiana e dignitários internacionais, o Aloha Hawaii preserva a essência de sua rica herança enquanto oferece comodidades modernas de classe mundial.
          </Text>

          <Text style={styles.title}>Aposentos:</Text>
          <Text style={styles.text}>
            O Hotel Aloha Hawaii oferece uma variedade de acomodações luxuosas para atender todas as necessidades dos nossos hóspedes. Desde suítes opulentas com vista panorâmica do Oceano Pacífico até quartos acolhedores decorados com arte local e móveis elegantes, cada aposento foi cuidadosamente projetado para proporcionar conforto e tranquilidade. Todos os quartos estão equipados com camas king-size, banheiros de mármore, varandas privativas e tecnologia de ponta para garantir uma estadia inesquecível.
          </Text>

          <Text style={styles.title}>Amenidades:</Text>
          <Text style={styles.text}>
          No Hotel Aloha Hawaii, nos orgulhamos de oferecer uma gama completa de amenidades para enriquecer a experiência de nossos hóspedes:{'\n'}
            - Restaurante Gourmet: Saboreie pratos exóticos e cozinha internacional em nosso restaurante cinco estrelas, onde chefs renomados criam experiências culinárias inesquecíveis com ingredientes frescos e locais.{'\n'}
            - Spa e Bem-Estar: Relaxe e revitalize-se em nosso spa de luxo, que oferece uma variedade de tratamentos e terapias inspiradas nas tradições havaianas.{'\n'}
            - Piscinas e Áreas de Lazer: Desfrute de nossas piscinas de borda infinita, rodeadas por exuberantes jardins tropicais, ou relaxe nas espreguiçadeiras à beira-mar com serviço de bar exclusivo.{'\n'}
            - Centro de Fitness: Mantenha-se em forma em nosso centro de fitness moderno, equipado com os mais recentes aparelhos e programas de treino personalizados.{'\n'}
            - Eventos e Reuniões: Nossas salas de conferências e espaços para eventos são ideais para casamentos, reuniões de negócios e celebrações especiais, com serviço de catering e planejamento de eventos à disposição.{'\n'}
            - Atividades ao Ar Livre: Explore a beleza natural do Havaí com atividades como snorkeling, surfe, trilhas ecológicas e excursões culturais, todas organizadas pelo nosso concierge dedicado.
          </Text>
          
      
          

        </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.678)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
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
  
});

export default Home;
