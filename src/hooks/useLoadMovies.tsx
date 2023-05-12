import { useEffect, useState } from "react";
import { getMovies, searchMoviesByText } from "../services/moviesServices";
import { useMovieContext } from "../context/movieState";
import { api_key } from "../utils/utils";

const useLoadMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const {
    state: { currentPage, searchText },
    dispatch,
  } = useMovieContext();

  useEffect(() => {
    if (searchText === "") {
      if (dispatch) {
        dispatch({
          type: "UPDATE_TOTAL_PAGES",
          payload: 500,
        });
      }
      loadMovies();
    } else {
      searchMovies();
    }
  }, [searchText, currentPage]);

  const searchMovies = () => {
    setLoading(true);
    searchMoviesByText({ api_key, page: 1, query: searchText })
      .then((res) => {
        setMovies(res.results);
        if(dispatch) {
          dispatch({
            type: "UPDATE_TOTAL_PAGES",
            payload: res.total_pages
          })
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const loadMovies = () => {
    setLoading(true);
    getMovies({
      api_key,
      page: currentPage,
    })
      .then((response: IGetMoviesResponse) => {
        setMovies(response.results);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return { loading, movies };
};

export default useLoadMovies;
