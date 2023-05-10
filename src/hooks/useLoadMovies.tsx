import { useEffect, useState } from 'react'
import { getMovies } from '../services/moviesServices'
import { useMovieContext } from '../context/movieState'

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
      api_key: '8f781d70654b5a6f2fa69770d1d115a3',
      page: currentPage,
    })
      .then((response: IGetMoviesResponse) => {
        setMovies(response.results);
        if (dispatch) {
          dispatch({
            type: 'UPDATE_TOTALS',
            payload: response.total_results
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return { loading, movies };
};

export default useLoadMovies;
