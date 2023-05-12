import { FC } from "react";
import { useMovieContext } from "../../context/movieState";
import usePagination from "../../hooks/usePagination";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

/**
 * Render the pagination of the list
 * @returns footer list
 */
const PaginationComponent: FC = () => {
  const {
    state: { currentPage, total_pages },
  } = useMovieContext();
  const { nextPage, previousPage, firstPage, lastPage } = usePagination();

  return (
    <div
      style={{
        marginTop: 20,
      }}
    >
      <Button
        icon={
          <>
            <LeftOutlined />
            <LeftOutlined />
          </>
        }
        onClick={firstPage}
        size="middle"
        shape="round"
        disabled={currentPage === 1}
        data-testid="go-first-page-button"
      />
      <Button
        icon={<LeftOutlined />}
        onClick={previousPage}
        size="middle"
        shape="round"
        disabled={currentPage === 1}
        data-testid="go-previous-page-button"
      />
      <span
        style={{
          margin: "0 15px",
        }}
        data-testid="current-page"
      >
        {`${currentPage} / ${total_pages}`}
      </span>
      <Button
        icon={<RightOutlined />}
        onClick={nextPage}
        size="middle"
        shape="round"
        disabled={currentPage === total_pages}
        data-testid="go-next-page-button"
      />
      <Button
        icon={
          <>
            <RightOutlined />
            <RightOutlined />
          </>
        }
        onClick={lastPage}
        size="middle"
        shape="round"
        disabled={currentPage === total_pages}
        data-testid="go-last-page-button"
      />
    </div>
  );
};

export default PaginationComponent;
