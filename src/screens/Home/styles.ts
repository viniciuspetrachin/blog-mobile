import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.size.md}px 0;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.size.md}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`