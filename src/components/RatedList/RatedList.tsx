import { Row, Space } from "antd";
import { FC } from "react";
import MovieCardComponent from "../MovieCard/MovieCard";

const RatedListComponent: FC<{ movies: IRatedMovie[] }> = ({ movies }) => {
  return (
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
  );
};

export default RatedListComponent;
