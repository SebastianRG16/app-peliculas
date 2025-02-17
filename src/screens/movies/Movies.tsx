import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useMovies} from '../../services/movies/useMoviesService';
import {Movie} from '../../services/interfaces';
import {
  ButtonWrapper,
  Card,
  Container,
  Image,
  Information,
  Padding,
} from './Styles';
import {formatDate, roundNumber} from '../../hooks/functions';
import {Button} from '../../components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {useMovieStore} from '../../storage/storage';
import { Text } from '../../components/text/StylesText';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MovieId'>;

export const Movies = () => {
  const navigation = useNavigation<NavigationProp>();
  const addMovie = useMovieStore(state => state.addMovie);
  const {data, error, isLoading} = useMovies();

  const handlePress = (item: Movie) => {
    addMovie(item);
    navigation.navigate('MovieId');
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#FF5733" />;
  }

  if (error instanceof Error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <Container>
      <Padding>
        <Text center="center" size="xl" fontVariant="bold">
          {' '}
          PELICULAS
        </Text>
      </Padding>
      <FlatList
        data={data?.movies}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={5}
        windowSize={5}
        removeClippedSubviews={true}
        renderItem={({item}) => (
          <Card>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
            <Information>
              <Text fontVariant="bold">{item.title} </Text>
              <Text> {formatDate(item.release_date)}</Text>
              <Text> {`Puntuacion: ${roundNumber(item.vote_average)}`}</Text>
              <ButtonWrapper>
                <Button text="Visualizar" onPress={() => handlePress(item)} />
              </ButtonWrapper>
            </Information>
          </Card>
        )}
      />
    </Container>
  );
};
