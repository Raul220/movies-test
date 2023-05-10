import { FC } from "react";
import useLoadMovies from "../../hooks/useLoadMovies";
import MovieListComponent from "../../components/MovieList/MovieList";
import PaginationComponent from "../../components/Pagination/Pagination";
import TitleComponent from "../../components/Title/Title";

const Home: FC = () => {
  const { loading, movies } = useLoadMovies();

  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <TitleComponent title="Movies" />
      {loading ? <h2>Cargando...</h2> : <MovieListComponent list={movies} />}
      <PaginationComponent />
    </section>
  );
};

export default Home;
