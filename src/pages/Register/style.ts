import styled from 'styled-components/native'
import { background, primary, text } from '../../styles/cssGlobalVar'

export const Container = styled.ScrollView`
  background: ${background};
  flex: 1;
  padding: 32px 14px;
`

export const Title = styled.Text`
  color: ${primary};
  font-size: 58px;
  font-weight: bold;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 62px;
`

export const InputItem = styled.View`
  margin-bottom: 22px;
`

export const InputTitle = styled.Text`
  color: ${primary};
  font-size: 26px;
`

export const Input = styled.TextInput`
  border-bottom-width: 2px;
  border-bottom-color: ${primary};
  font-size: 20px;
  padding: 10px 0;
  color: ${text};
`

export const Button = styled.TouchableOpacity`
  background: ${primary};
  padding: 22px;
  border-radius: 6px;
  margin-top: 22px;
`

export const ButtonText = styled.Text`
  color: ${text};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 22px;
`

export const ForgotPasswordButtonText = styled.Text`
  color: ${text};
  font-size: 17px;
  text-align: center;
  text-decoration: underline;
`
