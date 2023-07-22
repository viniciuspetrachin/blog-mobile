import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.size.md}px;
`

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: center;
  gap: ${RFValue(5)}px;
`

export const TextName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.size.font.xs}px;
`
export const TextGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.size.font.lg}px;
`

export const Image = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(25)}px;
`