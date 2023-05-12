import { FC } from "react";
import { img_url_base } from "../../utils/utils";
import { Card, Image, Divider } from "antd";
import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

/**
 * Render a card with principal movie information
 * @param param0 Movie info. rated is a calification number that if is not null is because the componet is rendered in th rated list
 * @returns A card with movie info
 */
const MovieCardComponent: FC<{
  name: string;
  poster?: string | null;
  release?: string | null;
  id: number;
  rated?: number | null;
}> = ({ name, poster, release, id, rated }) => {

  return (
    <Card
      title={name}
      extra={<Link to={'/movie/'+ id}>Ver más</Link>}
      style={{ width: 300, margin: "2.5px" }}
    >
      <Image src={img_url_base + poster} style={{ borderRadius: 8 }} />
      <Divider />
      {!!release && (
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
      )}

      {!!rated && (
        <p>
          <span
            style={{
              fontWeight: 900,
            }}
          >
            Puntuación: {rated}{" "}
            <StarFilled
              style={{
                color: "#ffd700"
              }}
            />
          </span>
        </p>
      )}
    </Card>
  );
};

export default MovieCardComponent;
