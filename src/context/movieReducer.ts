import { State } from "./movieState";

export interface UpdateTotals {
  type: "UPDATE_TOTALS";
  payload: number;
}

export interface UpdateCurrentPage {
  type: "UPDATE_CURRENT_PAGE";
  payload: number;
}

export interface UpdateRatedMovies {
  type: "UPDATE_RATED_MOVIES";
  payload: IRatedMovie[];
}

export interface UpdateSessionId {
  type: "UPDATE_SESSION_ID";
  payload: string;
}

type Action = UpdateTotals | UpdateCurrentPage | UpdateRatedMovies | UpdateSessionId;
const MovieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_TOTALS":
      return {
        ...state,
        total_results: action.payload,
      };
    case "UPDATE_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "UPDATE_RATED_MOVIES":
      return {
        ...state,
        ratedMovies: action.payload,
      };
    case "UPDATE_SESSION_ID":
      return {
        ...state,
        session_id: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
