import { type } from "os";
import { State } from "./movieState";

export interface UpdateTotals {
  type: "UPDATE_TOTALS";
  payload: number;
}

export interface UpdateCurrentPage {
  type: "UPDATE_CURRENT_PAGE";
  payload: number;
}

type Action = UpdateTotals | UpdateCurrentPage;
const MovieReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'UPDATE_TOTALS':
            return {
                ...state,
                total_results: action.payload
            };
        case 'UPDATE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
}

export default MovieReducer;