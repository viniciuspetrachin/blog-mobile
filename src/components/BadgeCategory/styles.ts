import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.size.xs}px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.size.xs}px;
`
export const Text = styled.Text`
  font-size: ${({ theme }) => theme.size.font.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`