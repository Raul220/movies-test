import { FC } from "react";

const MovieListComponent: FC<{list: IMovie[]}> = ({ list }) => {
  return (
    <div>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>
              {
                item.title
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MovieListComponent;
