import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export interface DividerProps {
  height?: number;
}

export const DividerContainer = styled.View<DividerProps>`
    width: 100%;
    height: ${({ height = 1 }) => RFValue(height)}px;
    background-color: black;
    margin: ${({ theme }) => theme.size.lg}px 0;
    opacity: 0.2;
`;
