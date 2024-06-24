import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ajuda(){
  const navigation = useNavigation();

  function navegarAjuda() {
    navigation.navigate('Contato');
  }

  return (
    <ImageBackground
      source={require('../../assets/image0.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
     <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>(FAQ):</Text>

        <Text style={styles.title}>Quais são os horários de check-in e check-out no Hotel Aloha Hawaii?</Text>
        <Text style={styles.text}>O check-in é a partir das 15:00 e o check-out deve ser feito até as 11:00.</Text>
       
        <Text style={styles.title}>O hotel oferece serviço de transporte do aeroporto?</Text>
        <Text style={styles.text}> Sim, oferecemos serviço de transporte de ida e volta para o aeroporto 
          mediante solicitação e por uma taxa adicional. Por favor, entre em contato com a recepção para agendar.</Text>


        <Text style={styles.title}>Quais são as opções de refeições disponíveis no hotel?</Text>
        <Text style={styles.text}>
        Nosso hotel possui um restaurante gourmet que serve café da manhã, almoço e jantar,
         além de um bar à beira da piscina com opções de snacks e bebidas. Oferecemos também 
         serviço de quarto 24 horas.
          </Text>

          <Text style={styles.title}>O hotel possui estacionamento?</Text>
          <Text style={styles.text}>  Sim, temos estacionamento disponível para nossos hóspedes. 
            Há a opção de estacionamento self-service ou serviço de manobrista, ambos com taxas
             diárias aplicáveis.  </Text>

          <Text style={styles.title}>Quais atividades e serviços estão disponíveis no hotel?</Text>
          <Text style={styles.text}>
          O Hotel Aloha Hawaii oferece uma variedade de atividades, 
          incluindo acesso a piscinas de borda infinita, um spa de luxo, 
          um centro de fitness, e várias atividades ao ar livre como snorkeling,
           surfe e trilhas ecológicas. </Text>

          <Text style={styles.title}>Como posso fazer uma reserva ou cancelar uma existente?</Text>
          <Text style={styles.text}>
          As reservas podem ser feitas ligando para a nossa central de reservas. 
          Para cancelar ou modificar uma reserva, entre em contato conosco pelo mesmo canal com pelo menos 24 horas de 
          antecedência para evitar taxas de cancelamento.</Text>

          <Text style={styles.title}>Ainda tem dúvidas ou precisa de ajuda?</Text>
          <Text style={styles.text}>Se você ainda tem dúvidas, problemas ou gostaria de fazer uma reserva,
             estamos aqui para ajudar. Por favor, clique no botão abaixo para acessar nossa página de contato e 
             falar diretamente conosco. Nossa equipe de atendimento ao cliente está disponível 24 horas por dia,
              7 dias por semana, para garantir que sua experiência no Hotel Aloha Hawaii seja perfeita.</Text>
          
          
              <View style={styles.buttonContainer }>
          <TouchableOpacity style={styles.button} onPress={navegarAjuda}>
            <Text style={styles.buttonText}>Contatos</Text>
          </TouchableOpacity>
        </View>

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
  button: {
    backgroundColor: 'rgba(26, 24, 24, 0.897)', 
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

