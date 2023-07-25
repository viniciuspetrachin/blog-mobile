
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.size.md}px;
`;

export const StyledInput = styled.TextInput`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  margin-right: 5px;
  border-radius:${RFValue(5)}px;
  flex: 1;
  padding: 0 ${RFValue(10)}px;
  font-size: ${({ theme }) => theme.size.font.md}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledButton = styled.TouchableOpacity`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius:${RFValue(5)}px;
`;