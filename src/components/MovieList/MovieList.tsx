import { FC } from "react";
import MovieCardComponent from "../MovieCard/MovieCard";
import { Row, Space } from "antd";

/**
 * Render a list of movies
 * @param param0 movie list
 * @returns List of movies
 */
const MovieListComponent: FC<{ list: IMovie[] }> = ({ list }) => {
  return (
    <div>
      <Space size="middle" direction="horizontal">
        <Row justify="center">
          {list.map((item, index) => (
            <MovieCardComponent
              key={index}
              name={item.title}
              poster={item.poster_path}
              release={item.release_date}
              id={item.id}
            />
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default MovieListComponent;
