export interface MoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }
  
  export interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
  }
  
  export interface MoviesResult {
    movies: Movie[] | null;
    error: string | null;
  }
  