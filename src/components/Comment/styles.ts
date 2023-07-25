import styled from "styled-components/native"

export const Container = styled.View`
  margin: 0 ${({ theme }) => theme.size.lg}px;
  padding: ${({ theme }) => theme.size.xs}px;
  border-radius: ${({ theme }) => theme.size.xs}px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  gap: ${({ theme }) => theme.size.xs}px;
  margin-bottom: ${({ theme }) => theme.size.sm}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.md}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`

export const BodyText = styled.Text`
  font-size: ${({ theme }) => theme.size.font.sm}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`

export const ByText = styled.Text`
  font-size: ${({ theme }) => theme.size.font.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
`