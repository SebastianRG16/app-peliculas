import axios from 'axios';
import api from '../api';
import {MoviesResponse, MoviesResult} from '../interfaces';

const getMovies = async (): Promise<MoviesResult> => {
  try {
    const apiKey =
      '7cfa7c89b397a4317267fdff6c61f975';
    const response = await api.get<MoviesResponse>(
      `/discover/movie?api_key=${apiKey}&language=en-US`,
    );
    console.log(response);
    if (response.status === 200) {
      return {movies: response.data.results, error: null};
    } else {
      return {
        movies: null,
        error: 'Error desconocido al obtener las películas.',
      };
    }
  } catch (error: any) {
    let errorMessage = 'Error de conexión';
    if (axios.isAxiosError(error) && error.response) {
      const errorResponse = error.response.data;
      errorMessage = errorResponse.status_message || 'Error desconocido';
    }
    return {movies: null, error: errorMessage};
  }
};

export {getMovies};
