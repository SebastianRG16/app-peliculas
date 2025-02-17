import React from 'react';
import styled from 'styled-components/native';
import {Font, Padding, TextColor, Type} from './types';
import { useThemeStore } from '../../storage/storage';
import { ButtonLoading, ButtonText, Container, LoadingIndicator, StyledButton } from './Styles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  type?: Type;
  font?: Font;
  padding?: Padding;
  loading?: boolean;
  disabled?: boolean;
  textColor?: TextColor;
  buttonColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  padding = 'sm',
  font = 'medium',
  textColor = 'primary',
  onPress,
  loading = false,
  disabled = false,
  buttonColor,
}) => {
  const appliedType = useThemeStore(state => state.buttonType);

  return (
    <Container>
      <StyledButton onPress={onPress} disabled={loading || disabled} appliedType={appliedType} buttonColor={buttonColor}>
        {loading ? (
          <ButtonLoading>
            <ButtonText textColor={textColor} font={font} padding={padding}>
              {text}
            </ButtonText>
            <LoadingIndicator size="small" color="white" />
          </ButtonLoading>
        ) : (
          <ButtonText textColor={textColor} font={font} padding={padding}>
            {text}
          </ButtonText>
        )}
      </StyledButton>
    </Container>
  );
};
