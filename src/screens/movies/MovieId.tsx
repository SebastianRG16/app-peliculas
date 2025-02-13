import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {useMovieStore} from '../../storage/storage';
import {TextCom} from '../../components/text/TextCom';
import styles from './Styles';
import {Button} from '../../components/buttons/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const MovieId = () => {
  const {movies} = useMovieStore();
  const movie = movies[0];
  const navigation = useNavigation();

  if (!movie) {
    return (
      <View>
        <Text>No hay película guardada</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.poster}
      />
      <View style={styles.description}>
        <TextCom
          text={movie.title}
          center="start"
          size="xl2"
          fontVariant="bold"
        />
        <TextCom text={movie.overview} center="start" size="md" />
      </View>
      <View style={styles.buttonBackTo}>
        <Button text="Volver" onPress={() => {navigation.goBack()}} />
      </View>
    </ScrollView>
  );
};
