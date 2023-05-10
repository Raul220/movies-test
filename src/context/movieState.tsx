import { FC, PropsWithChildren, createContext, useContext, useReducer } from "react";
import MovieReducer, { UpdateCurrentPage, UpdateTotals } from "./movieRedicer";

export interface State {
    total_results: number;
    total_pages: number;
    currentPage: number;
}

export interface Store {
    state: State;
    dispatch?: React.Dispatch< UpdateTotals | UpdateCurrentPage >;
}

const initialState: State = {
    total_pages: 500,// when i test last page it returns an error that says "page must be less than or equal to 500" so dicided to fix total
    total_results: 0,
    currentPage: 1
}

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