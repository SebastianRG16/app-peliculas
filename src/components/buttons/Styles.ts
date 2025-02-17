import styled from "styled-components/native";

import {TouchableOpacity, ActivityIndicator} from 'react-native';
import { Font, Padding, TextColor, Type } from "./types";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(TouchableOpacity)<{
  buttonColor?: string;
  disabled?: boolean;
  appliedType: Type;
}>`
  border-radius: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ buttonColor, appliedType }) =>
    buttonColor ? buttonColor : buttonVariants[appliedType]};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const buttonVariants = {
  primary: '#A83D1A',
  succes: '#50B5D7',
  warning: '#EE6F2D',
  secondary: '#701E0C',
  tertiary: '#360D04',
  neutral: '#C4C4C4',
};

export const ButtonText = styled.Text<{textColor: TextColor; font: Font; padding: Padding}>`
  text-align: center;
  font-size: 16px;
  line-height: 21.86px;
  color: ${({ textColor }) =>
    textColor === 'primary' ? 'white' : '#360D04'};
  font-family: ${({ font }: Font) => (font === 'bold' ? 'bold' : 'medium')};
  padding: ${({ padding }) => (padding === 'sm' ? '8px' : '16px')};
`;

export const ButtonLoading = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const LoadingIndicator = styled(ActivityIndicator)`
  position: absolute;
  right: 20px;
  width: 20px;
`;