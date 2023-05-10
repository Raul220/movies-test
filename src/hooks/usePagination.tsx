import { useMovieContext } from "../context/movieState";

const usePagination = () => {
  const {
    state: { currentPage, total_pages },
    dispatch,
  } = useMovieContext();

  /**
   * Go to next page
   */
  const nextPage = () => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_CURRENT_PAGE",
        payload: currentPage + 1,
      });
    }
  };

  /**
   * Go to previous page
   */
  const previousPage = () => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_CURRENT_PAGE",
        payload: currentPage - 1,
      });
    }
  };

  /**
   * Go to first page
   */
  const firstPage = () => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_CURRENT_PAGE",
        payload: 1,
      });
    }
  };

  /**
   * Go to last page
   */
  const lastPage = () => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_CURRENT_PAGE",
        payload: total_pages,
      });
    }
  };

  return { nextPage, previousPage, firstPage, lastPage };
};

export default usePagination;
