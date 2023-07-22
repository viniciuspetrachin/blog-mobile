import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const FavoritesContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${RFValue(28)}px;
  width: ${RFValue(28)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(25)}px;
`