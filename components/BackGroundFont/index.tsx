import { View, Text } from 'react-native'
import { FundoTitulo, ConteudoTitulo, Titulo } from './styles'
import React from 'react'



export default function BackGroundFont(props: { titulo: string; conteudo: string } ) {

  const { titulo, conteudo } = props;

  return (
    <FundoTitulo>
      <Text style={{fontSize: 30}} > {titulo} </Text>
      <ConteudoTitulo>
        <Text> {conteudo} </Text>
      </ConteudoTitulo>

    </FundoTitulo>
  )
}