import axios from "axios";

/**
 * Load movies
 * @param variables Variables to get paginated movie list
 * @returns movies, pages, and total results
 */
export async function getMovies(variables: IGetMoviesVariables) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${variables.api_key}&page=${variables.page}`;
  let response: IGetMoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  await axios
    .get(url)
    .then((res) => {
      console.log(res);
      response = res.data;
    })
    .catch((e) => console.log(e));
  return response;
}

/**
 * Get a movie by id
 * @param variables id and api_key to get a movie
 * @returns a movie
 */
export async function getMovieDetail(variables: IGetMovieDetailVariables) {
  const url = `https://api.themoviedb.org/3/movie/${variables.movie_id}?api_key=${variables.api_key}&language=es-ES`;
  let response: IGetMovieDetailResponse = {
    title: "",
    adult: false,
    backdrop_path: "",
    id: 0,
    homepage: "",
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    budget: 0,
    revenue: 0,
    production_companies: [
      {
        id: 0,
        logo_path: "",
        name: "",
        origin_country: "",
      },
    ],
    release_date: "",
    status: "",
    tagline: "",
    vote_average: 0,
    vote_count: 0,
    genres: [
      {
        id: 0,
        name: "",
      },
    ],
  };
  await axios
    .get(url)
    .then((res) => {
      console.log(res);
      response = res.data;
    })
    .catch((e) => console.log(e));
  return response;
}

/**
 * Create a guest sisseion
 * @param variables api key
 * @returns guess session id and expire date
 */
export async function createGuestSession(
  variables: ICreateGuessSessionVariables
) {
  const url = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${variables.api_key}`;
  let response: ICreateGuessSessionResponse = {
    success: false,
    expires_at: "",
    guest_session_id: "",
  };
  await axios
    .get(url)
    .then((res) => {
      console.log(res);
      response = res.data;
    })
    .catch((e) => console.log(e));
  return response;
}

/**
 * Rate a movie by id
 * @param variables api key, movie id, guess session id
 * @returns status of the request
 */
export async function rateMovie(variables: IRateVariables) {
  const url = `https://api.themoviedb.org/3/movie/${variables.movie_id}/rating?api_key=${variables.api_key}&guest_session_id=${variables.guest_session_id}`;
  let response: IRateResponse = {
    status_code: 0,
    status_message: "",
    success: false,
  };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      api_key: variables.api_key,
      guest_session_id: variables.guest_session_id,
    },
    body: JSON.stringify({
      value: variables.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((e) => {
      console.log(e);
    });
  return response;
}

/**
 * Search movies by text
 * @param variables api key page and text tu search
 * @returns the movies
 */
export async function searchMoviesByText(variables: ISearchMoviesVariables) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${variables.api_key}&query=${variables.query}&page=${variables.page}`;
  let response: IGetMoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  await axios
    .get(url)
    .then((res) => {
      console.log(res);
      response = res.data;
    })
    .catch((e) => console.log(e));
  return response;
}
