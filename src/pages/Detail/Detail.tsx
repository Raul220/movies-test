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
      ) : (
        movie && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <DetailComponent movie={movie} />
            <Link to="/">Atras</Link>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
