import { View, Text } from 'react-native'
import React from 'react'
import { Styles } from './styles'

export default function OlaMundo() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.texto}>Olá mundo!!!</Text>
    </View>
  )
}

