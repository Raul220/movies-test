import { Row, Space } from "antd";
import { FC } from "react";
import MovieCardComponent from "../MovieCard/MovieCard";

/**
 * Render the rated list
 * @param param0 raated movies
 * @returns rated movie list
 */
const RatedListComponent: FC<{ movies: IRatedMovie[] }> = ({ movies }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Space size="middle" direction="horizontal">
        <Row justify="center">
          {movies.map((item, index) => (
            <MovieCardComponent
              key={index}
              name={item.title}
              poster={item.poster}
              id={item.id}
              rated={item.value}
            />
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default RatedListComponent;
