import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useMovieStore} from '../../../storage/storage';
import {
  ButtonBackTo,
  Container,
  Description,
  Poster,
} from '../Styles';
import {Button} from '../../../components/buttons/Index';
import {useNavigation} from '@react-navigation/native';
import { Text } from '../../../components/text/StylesText';

export const MovieId = () => {
  const {movies} = useMovieStore();
  const movie = movies[0];
  const navigation = useNavigation();

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  if (!movie) {
    return (
      <View>
        <Text>No hay película guardada</Text>
      </View>
    );
  }

  return (
    <Container>
      <Poster
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Description>
        <Text center="start" size="xl2" fontVariant="bold">
          {movie.title}
        </Text>
        <Text center="start" size="md">
          {' '}
          {movie.overview}
        </Text>
      </Description>
      <ButtonBackTo>
        <Button
          text="Volver"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ButtonBackTo>
    </Container>
  );
};
