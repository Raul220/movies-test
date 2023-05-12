import { FC } from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../../context/movieState";

const Navbar: FC = () => {
  const {
    state: { ratedMovies },
  } = useMovieContext();

  return (
    <div
      style={{
        padding: '10px 160px',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h4>
          peliculas
          <span
            style={{
              color: "#9A0F0F",
              fontSize: 18,
              fontWeight: 900,
            }}
          >
            Populares
          </span>
        </h4>
      </Link>
      {!!ratedMovies.length && (
        <Link
          to="/rated"
          style={{
            textDecoration: "none",
          }}
        >
          <h4>Puntuadas</h4>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
