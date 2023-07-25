import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  paddingBottom: number
  showBookmark: boolean
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({ showBookmark }) => showBookmark ? 'space-between' : 'flex-start'};
  padding: 0 ${({ theme }) => theme.size.lg}px;
  padding-bottom: ${({ paddingBottom }) => RFValue(paddingBottom)}px;
  ${Platform.OS === 'android' && css`margin-top: ${RFValue(60)}px`};
`

export const FavoritesContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${RFValue(28)}px;
  width: ${RFValue(28)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(25)}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`