import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(10)}px;
  margin-bottom: ${RFValue(6)}px;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  gap: ${RFValue(3)}px;
  height: 100%;
`

export const Thumbnail = styled.Image`
  width: ${RFValue(100)}px;
  border-radius: 8px;
  aspect-ratio: 1.6;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.sm}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const TextInfo = styled.Text`
  font-size: ${({ theme }) => theme.size.font.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`