import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Home from "../Screens/Home";
import Login from '../Screens/Login';
import Cursos from "../Screens/Cursos";
import Contato from "../Screens/Contato";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarInactiveTintColor: "black",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarInactiveTintColor: "black",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="user" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Cursos"
          component={Cursos}
          options={{
            tabBarInactiveTintColor: "black",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="help-circle" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarInactiveTintColor: "black",
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
