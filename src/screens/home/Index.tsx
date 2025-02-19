import React from 'react';
import {BackgroundImage, TextContainer} from './Styles';
import { Text } from '../../components/text/StylesText';

export const Home = () => {
  return (
    <BackgroundImage
      source={require('../../assets/images/imagenInicio.png')}
      resizeMode="cover">
      <TextContainer>
        <Text
          fontVariant="bold"
          color="secondary"
          size="xl2"
          center="center">
          Bienvenidos
        </Text>
        <Text
          size="sm3"
          color="secondary"
          center="center">
          Esta es una aplicación de películas, donde podrás visualizar
          diferentes tipos de películas, navegando a la información de cada una
          de ellas para conocer sus puntuaciones y reseñas.
        </Text>
      </TextContainer>
    </BackgroundImage>
  );
};
