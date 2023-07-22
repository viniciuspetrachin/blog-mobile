
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  border: 1px solid gray;
  margin-right: 5px;
  border-radius:${RFValue(5)}px;
  flex: 1;
  padding: 0 ${RFValue(10)}px;
`;

export const StyledButton = styled.TouchableOpacity`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius:${RFValue(5)}px;
`;