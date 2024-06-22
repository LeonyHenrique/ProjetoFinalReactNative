import { View, Button } from 'react-native'
import React from 'react'

export default function Botao(conteudo:any, clique:any) {
  return (
    <View>
        <Button title={conteudo} onPress={clique}/>
    </View>
  )
}