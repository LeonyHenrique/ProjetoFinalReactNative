import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {db} from './firebaseConnection';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Routes';

export default function App() {

  return (
    
      <Routes/>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
