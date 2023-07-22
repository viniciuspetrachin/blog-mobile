import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
flex: 1;
 margin: ${({ theme }) => theme.size.md}px ${({ theme }) => theme.size.lg}px;
 gap: ${({ theme }) => theme.size.xs}px;
`

export const InfoText = styled.Text`
  font-size: ${({ theme }) => theme.size.xs}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const TextBody = styled.Text`
  font-size: ${({ theme }) => theme.size.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`