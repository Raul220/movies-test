import { FC } from "react";
import { Link } from "react-router-dom";
import useDetail from "../../hooks/useMovieDetail";
import DetailComponent from "../../components/MovieDetail/MovieDetail";
import Loader from "../../components/Loader/Loader";

const Detail: FC = () => {
  const { movie, loading } = useDetail();

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (!!movie?.title ? (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <DetailComponent movie={movie} />
          <Link to="/">Atras</Link>
        </div>
      ) : (
        <h2
          style={{
            color: "red",
            textAlign: "center",
            marginTop: 200,
          }}
        >
          La Película no ha sido encontarda
        </h2>
      ))}
    </div>
  );
};

export default Detail;
