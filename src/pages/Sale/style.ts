import styled from 'styled-components/native'
import { background, primary, text } from '../../styles/cssGlobalVar'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${background};
`

export const Button = styled.TouchableOpacity`
  background: ${primary};
  padding: 12px;
  border-radius: 12px;
  width: 150px;
  margin-bottom: 12px;
`

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${text};
`
