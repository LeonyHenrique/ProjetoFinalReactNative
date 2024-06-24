import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Foto = styled.Image`
    width: 100px;
    height: 80px;
    margin-right: 10px;
`;

export const Titulo = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
    text-align: center;
`;

export const Descricao = styled.Text`
    font-size: 12px;
    text-align: center;
    margin-bottom: 5px;
`;

export const Preco = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: green;
    text-align: center;
    margin-top: auto; /* Alinha o preço na parte inferior */
`;

export const Card = Animatable.createAnimatableComponent(styled.View`
    justify-content: center;
    align-items: center;
    min-width: 95%;
    min-height: 150px;
    max-height: 150px;
    border: solid 3px black;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
`);