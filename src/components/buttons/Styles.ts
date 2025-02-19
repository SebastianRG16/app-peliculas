import styled from "styled-components/native";

import {TouchableOpacity, ActivityIndicator} from 'react-native';
import { Font, Padding, TextColor, Type } from "./types";
import { theme } from "../../theme/theme";

export const buttonVariants = {
  primary: theme.typesColors.primary,
  succes: theme.typesColors.succes,
  warning: theme.typesColors.warning,
  secondary: theme.typesColors.secondary,
  tertiary: theme.typesColors.tertiary,
  neutral: theme.typesColors.neutral,
};

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
  background-color: ${({ buttonColor, appliedType }: any ) => buttonColor ? buttonColor : buttonVariants[appliedType]};
  opacity: ${({ disabled }: any) => (disabled ? 0.5 : 1)};
`;

export const ButtonText = styled.Text<{textColor: TextColor; font: Font; padding: Padding}>`
  text-align: center;
  font-size: 16px;
  line-height: 21.86px;
  color: ${({ textColor }: any) =>
    textColor === 'primary' ? 'white' : '#360D04'};
  font-family: ${({ font }: any) => (font === 'bold' ? 'bold' : 'medium')};
  padding: ${({ padding }: any) => (padding === 'sm' ? '8px' : '16px')};
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
