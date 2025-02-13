import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import styles from './Styles';
import {TextCom} from '../../components/text/TextCom';

export const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/imagenInicio.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <TextCom
            text="Bienvenidos"
            fontVariant="bold"
            color="secondary"
            size="xl2"
          />
          <TextCom
            text="Esta es una aplicación de películas, donde podrás visualizar
          diferentes tipos de películas, navegando a la información de cada una
          de ellas para conocer sus puntuaciones y reseñas."
            size="sm3"
            color="secondary"
            center="center"
          />
        </View>
      </View>
    </ImageBackground>
  );
};
