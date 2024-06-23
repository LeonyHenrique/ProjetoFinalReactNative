import {styled} from 'styled-components/native'

export const FundoTitulo = styled.View`
    flex: 1;
  align-items: center;
  justify-content: center;
  max-height: 555px;
  max-width: 320px;
  min-height: 555px;
  min-width: 320px;
  margin: 0 50px;
  background-color: #eff1efd5;
  border-color: #000;
  border-width: 1px;
  padding: 20px;
`

export const ConteudoTitulo = styled.View`
  width: 90%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  `

export const Btext = styled.Text`
  padding: 10px;
  font-size: 15px;
  color: #000;
  
`;


export const Utext = styled.Text`
    font-size: 30px;
    font-style: italic;
    margin-bottom: 30px;
`

export const Scroll = styled.ScrollView`
    padding: 20px;
`

export const SubTitulo = styled.Text`
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
`