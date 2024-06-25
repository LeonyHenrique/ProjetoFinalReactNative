import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feather from "react-native-vector-icons/Feather";
import Home from "../Screens/Home";
import Login from '../Screens/Login';
import Cursos from "../Screens/Cursos";
import Contato from "../Screens/Contato";
import Cadastro from "../Screens/Cadastro";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
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
              return <Feather name="book" color={color} size={size} />;
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
  );
};

export default function Routes() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login " component={TabRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
