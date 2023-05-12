import { useMovieContext } from "../../context/movieState";

const RatedMovies = () => {
  const {
    state: { ratedMovies },
  } = useMovieContext();

  return (
    <div>
      Rated Movies
      <ul>
        {ratedMovies.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RatedMovies;
