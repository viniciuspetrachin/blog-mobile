import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${RFValue(10)}px ${RFValue(8)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(8)}px
`
export const Text = styled.Text`
  font-size: ${({ theme }) => theme.size.font.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`