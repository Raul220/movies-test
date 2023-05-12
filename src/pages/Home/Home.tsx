import { FC } from "react";
import useLoadMovies from "../../hooks/useLoadMovies";
import MovieListComponent from "../../components/MovieList/MovieList";
import PaginationComponent from "../../components/Pagination/Pagination";
import TitleComponent from "../../components/Title/Title";
import Loader from "../../components/Loader/Loader";

/**
 * Render the principal page with the movie list
 * @returns Home Page
 */
const Home: FC = () => {
  const { loading, movies } = useLoadMovies();

  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <TitleComponent title="Movies" />
      {loading ? <Loader /> : <MovieListComponent list={movies} />}
      <PaginationComponent />
    </section>
  );
};

export default Home;
