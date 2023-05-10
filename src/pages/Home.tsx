import { FC } from "react";
import useLoadMovies from "../hooks/useLoadMovies";
import MovieListComponent from "../components/MovieList/MovieList";
import PaginationComponent from "../components/Pagination/PaginationComponent";

const Home: FC = () => {
  const { loading, movies } = useLoadMovies();

  return (
    <section>
      {loading ? <h2>Cargando...</h2> : <MovieListComponent list={movies} />}
      <PaginationComponent />
    </section>
  );
};

export default Home;
