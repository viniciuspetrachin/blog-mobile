import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.size.md}px 0;
  padding-top: ${({ theme }) => Platform.OS === 'ios' ? 60 : theme.size.md}px;
  padding-bottom: ${RFValue(100)}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 ${({ theme }) => theme.size.md}px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.font.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${RFValue(5)}px;
`