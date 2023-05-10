import { FC } from "react";
import { useMovieContext } from "../../context/movieState";
import usePagination from "../../hooks/usePagination";

const PaginationComponent: FC = () => {
  const {
    state: { currentPage, total_pages, total_results },
    dispatch,
  } = useMovieContext();
  const { nextPage, previousPage, firstPage, lastPage } = usePagination();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <button onClick={firstPage}>{'<<'}</button>
      <button onClick={previousPage}>{'<'}</button>
      <span>{`${currentPage} / ${total_pages}`}</span>
      <button onClick={nextPage}>{'>'}</button>
      <button onClick={lastPage}>{'>>'}</button>
    </div>
  );
};

export default PaginationComponent
