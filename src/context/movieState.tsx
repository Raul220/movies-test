import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import MovieReducer, {
  UpdateCurrentPage,
  UpdateRatedMovies,
  UpdateSearchText,
  UpdateSessionId,
  UpdateTotals,
} from "./movieReducer";

export interface State {
  total_results: number;
  total_pages: number;
  currentPage: number;
  session_id: string;
  ratedMovies: IRatedMovie[];
  searchText: string;
}

export interface Store {
  state: State;
  dispatch?: React.Dispatch<
    UpdateTotals | UpdateCurrentPage | UpdateRatedMovies | UpdateSessionId | UpdateSearchText
  >;
}

const initialState: State = {
  total_pages: 500, // when i test last page it returns an error that says "page must be less than or equal to 500" so dicided to fix total
  total_results: 0,
  currentPage: 1,
  session_id: "",
  ratedMovies: [],
  searchText: '',
};

const MovieContext = createContext<Store>({ state: initialState });
export const useMovieContext = () => useContext(MovieContext);

const MovieState: FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
