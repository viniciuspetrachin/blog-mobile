import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: ${RFValue(5)}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${RFValue(5)}px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const SeeAllButton = styled.TouchableOpacity`
  padding: ${RFValue(2)}px ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`

export const SeeAllText = styled.Text`
  font-size: ${({ theme }) => theme.size.font.xs}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`