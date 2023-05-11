import axios from "axios";

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
