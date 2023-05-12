import { useEffect, useState } from "react";
import { getMovies } from "../services/moviesServices";
import { useMovieContext } from "../context/movieState";
import { api_key } from "../utils/utils";

const useLoadMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const {
    state: { currentPage },
    dispatch,
  } = useMovieContext();

  useEffect(() => {
    loadMovies();
  }, [currentPage]);

  const loadMovies = () => {
    setLoading(true);
    getMovies({
      api_key,
      page: currentPage,
    })
      .then((response: IGetMoviesResponse) => {
        setMovies(response.results);
        if (dispatch) {
          dispatch({
            type: "UPDATE_TOTALS",
            payload: response.total_results,
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return { loading, movies };
};

export default useLoadMovies;
