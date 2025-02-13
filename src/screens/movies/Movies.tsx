import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, ActivityIndicator} from 'react-native';
import {getMovies} from '../../services/movies/useMoviesService';
import {Movie} from '../../services/interfaces'; // Asegúrate de tener la interfaz Movie definida
import styles from './Styles';
import {TextCom} from '../../components/text/TextCom';
import {formatDate, roundNumber} from '../../hooks/functions';
import {Button} from '../../components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {useMovieStore} from '../../storage/storage';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MovieId'>;

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const addMovie = useMovieStore(state => state.addMovie);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const result = await getMovies();
      console.log(result);

      if (result.error) {
        setError(result.error);
      } else if (result.movies) {
        setMovies(result.movies);
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  const handlePress = (item: Movie) => {
    addMovie(item);
    navigation.navigate('MovieId');
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#FF5733" />;
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <TextCom
          text="PELICULAS"
          center="center"
          size="xl"
          fontVariant="bold"
        />
      </View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={styles.image}
            />
            <View style={styles.information}>
              <TextCom text={item.title} fontVariant="bold" />
              <TextCom text={formatDate(item.release_date)} />
              <TextCom text={`Puntuacion: ${roundNumber(item.vote_average)}`} />
              <View style={styles.button}>
                <Button
                  text="Visualizar"
                  onPress={() => handlePress(item)}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
