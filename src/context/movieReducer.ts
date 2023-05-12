import { State } from "./movieState";

export interface UpdateTotals {
  type: "UPDATE_TOTAL_PAGES";
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

export interface UpdateSearchText {
  type: "UPDATE_SEARCH_TEXT";
  payload: string;
}

type Action = UpdateTotals | UpdateCurrentPage | UpdateRatedMovies | UpdateSessionId | UpdateSearchText;
const MovieReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_TOTAL_PAGES":
      return {
        ...state,
        total_pages: action.payload,
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
    case "UPDATE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
