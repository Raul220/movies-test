import { useParams } from "react-router";
import { api_key } from "../utils/utils";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/moviesServices";

const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IGetMovieDetailResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = () => {
    if (id) {
      setLoading(true);
      const variables: IGetMovieDetailVariables = {
        api_key,
        movie_id: id,
      };
      getMovieDetail(variables)
        .then((response) => {
          setMovie(response);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  };

  return { movie, loading };
};

export default useDetail;
