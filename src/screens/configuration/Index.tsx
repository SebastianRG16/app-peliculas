import React, {useState} from 'react';
import {useThemeStore} from '../../storage/storage';
import {
  ButtonContainer,
  ButtonText,
  ColorButton,
  Container,
  Navbar,
  Section,
  StyledButton,
} from './Styles';
import {Text} from '../../components/text/StylesText';
import {theme} from '../../theme/theme';

export type Type =
  | 'succes'
  | 'primary'
  | 'warning'
  | 'secondary'
  | 'tertiary'
  | 'neutral';

export const Configuration = () => {
  const {setNavbarColor, setButtonType} = useThemeStore();
  const [selectedButtonType, setSelectedButtonType] = useState<Type>('primary');
  const [selectedNavbarColor, setSelectedNavbarColor] = useState<string>('');

  const handleButtonTypeChange = (type: Type) => {
    setSelectedButtonType(type);
    setButtonType(type);
  };

  const handleNavbarColorSelection = (color: string) => {
    setSelectedNavbarColor(color);
    setNavbarColor(color);
  };

  const navbarColors = [
    theme.color.black,
    theme.color.white,
    theme.color.gray,
    theme.color.blue,
  ];

  return (
    <Container>
      <Text size="xl2" center="center" fontVariant="bold">
        CONFIGURACION
      </Text>

      <Section>
        <Text size="md"> Color de la barra de navegación:</Text>
        <Navbar>
          {navbarColors.map(color => (
            <ColorButton
              key={color}
              onPress={() => handleNavbarColorSelection(color)}
              backgroundColor={color}
              isSelected={selectedNavbarColor === color}
            />
          ))}
        </Navbar>
      </Section>

      <Section>
        <Text size="md"> Tipo de botón:</Text>
        <ButtonContainer>
          {[
            'success',
            'primary',
            'warning',
            'secondary',
            'tertiary',
            'neutral',
          ].map(type => (
            <StyledButton
              key={type}
              onPress={() => handleButtonTypeChange(type as Type)}
              isSelected={selectedButtonType === type}>
              <ButtonText>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </ButtonText>
            </StyledButton>
          ))}
        </ButtonContainer>
      </Section>
    </Container>
  );
};
