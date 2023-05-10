import { FC } from "react";
import { img_url_base } from "../../utils/utils";
import { Card, Image, Divider } from "antd";
import { Link } from "react-router-dom";

const MovieCardComponent: FC<{
  name: string;
  poster?: string | null;
  release: string;
  id: number;
}> = ({ name, poster, release, id }) => {
  return (
    <Card
      title={name}
      extra={<Link to={`movie/${id}`}>Ver más</Link>}
      style={{ width: 300, margin: "2.5px" }}
    >
      <Image src={img_url_base + poster} style={{ borderRadius: 8 }} />
      <Divider />
      <p>
        <span
          style={{
            fontWeight: 900,
          }}
        >
          Extrenada:{" "}
        </span>
        {release}
      </p>
    </Card>
  );
};

export default MovieCardComponent;
