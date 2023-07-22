import { Dimensions } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  gap: ${({ theme }) => theme.size.xs}px;
`

export const FeaturedImage = styled.Image`
  width: 100%;
  aspect-ratio: 1.6;
  border-radius: ${RFValue(10)}px;
`
export const BadgesContainer = styled.View`
  flex-direction: row;
`

export const ArticleTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.size.font.sm}px;
  color: ${({ theme }) => theme.colors.primary};
`

export const ArticleInfo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.size.font.xs}px;
  color: ${({ theme }) => theme.colors.secondary};
`