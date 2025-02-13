import {create} from 'zustand';
import {Movie} from '../services/interfaces';
import {Type} from '../components/buttons/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MovieStore {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movieId: number) => void;
  setMovies: (movies: Movie[]) => void;
}

interface ThemeStore {
  navbarColor: string;
  buttonType: Type;
  setNavbarColor: (color: string) => void;
  setButtonType: (type: Type) => void;
  setColors: (navbarColor: string, buttonType: Type) => void;
  loadTheme: () => Promise<void>;
}

export const useMovieStore = create<MovieStore>(set => ({
  movies: [],
  addMovie: (movie: Movie) =>
    set(() => ({
      movies: [movie],
    })),
  removeMovie: (movieId: number) =>
    set(state => ({
      movies: state.movies.filter(movie => movie.id !== movieId),
    })),
  setMovies: (movies: Movie[]) => set({movies}),
}));

export const useThemeStore = create<ThemeStore>(set => ({
  navbarColor: '#FFFAF1',
  buttonType: 'succes',
  setNavbarColor: (color: string) => {
    set({navbarColor: color});
    AsyncStorage.setItem('navbarColor', color);
  },
  setButtonType: (type: Type) => {
    set({buttonType: type});
    AsyncStorage.setItem('buttonType', type);
  },
  setColors: (navbarColor: string, buttonType: Type) => {
    set({navbarColor, buttonType});
    AsyncStorage.setItem('navbarColor', navbarColor);
    AsyncStorage.setItem('buttonType', buttonType);
  },
  loadTheme: async () => {
    try {
      const navbarColor = await AsyncStorage.getItem('navbarColor');
      if (navbarColor) {
        set({navbarColor});
      }
      const buttonType = await AsyncStorage.getItem('buttonType');
      if (buttonType) {
        const validButtonType: Type = buttonType as Type;
        set({buttonType: validButtonType});
      }
    } catch (e) {
      console.error('Error loading theme from AsyncStorage', e);
    }
  },
}));
