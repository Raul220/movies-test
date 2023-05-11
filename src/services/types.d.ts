interface IMovie {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  title: string;
  original_title: string;
}

interface IGetMoviesVariables {
  api_key: string;
  page: number;
}

interface IGetMoviesResponse {
  results: IMovie[];
  total_pages: number;
  total_results: number;
  page: number;
}

interface IGetMovieDetailVariables {
  api_key: string;
  movie_id: string;
}

interface IGetMovieDetailResponse {
    id: number;
    adult: boolean;
    backdrop_path: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    homepage: string;
    production_companies: IProducton_Company[];
    release_date: string;
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    genres: IGener[];
    budget: number;
    revenue: number;
}

interface IGener {
    id: number;
    name: string;
}

interface IProducton_Company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

interface ICreateGuessSessionVariables {
    api_key: string;
}

interface ICreateGuessSessionResponse {
    success: boolean;
    guest_session_id: string;
    expires_at: string;
}

interface IRateVariables {
    api_key: string;
    value: number;
    movie_id: string;
    guest_session_id: string;
}

interface IRateResponse {
    status_code: number;
    status_message: string;
    success: boolean;
}