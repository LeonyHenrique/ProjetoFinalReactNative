import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import Ajuda from '../Screens/Ajuda';
import Contato from '../Screens/Contato';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}  options={{
            tabBarInactiveTintColor:'black',
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            }}} />

  
        <Tab.Screen name='Sobre' component={Sobre} options={{
            tabBarInactiveTintColor:'black',
            tabBarIcon: ({ color, size }) => {
              return <Feather name="info" color={color} size={size} />;
            }}} />
        <Tab.Screen name='Ajuda' component={Ajuda}options={{
            tabBarInactiveTintColor:'black',
            tabBarIcon: ({ color, size }) => {
              return <Feather name="help-circle" color={color} size={size} />;
            }}} />
        <Tab.Screen name='Contato' component={Contato}options={{
            tabBarInactiveTintColor:'black',
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone" color={color} size={size} />;
            }}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
