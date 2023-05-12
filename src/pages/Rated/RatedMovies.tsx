import RatedListComponent from "../../components/RatedList/RatedList";
import TitleComponent from "../../components/Title/Title";
import { useMovieContext } from "../../context/movieState";

const RatedMovies = () => {
  const {
    state: { ratedMovies },
  } = useMovieContext();

  return (
    <div>
      <TitleComponent title="Películas puntuadas" />
      <RatedListComponent movies={ratedMovies} />
    </div>
  );
};

export default RatedMovies;
