import { useState } from "react";
import { useMovieContext } from "../context/movieState";

const useSearch = () => {
  const { dispatch } = useMovieContext();

  const handleSearch = (value: string) => {
    if (dispatch) {
      dispatch({
        type: "UPDATE_SEARCH_TEXT",
        payload: value,
      });
    }
  };

  return { handleSearch };
};

export default useSearch;
