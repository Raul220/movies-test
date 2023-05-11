import { FC } from "react";
import TitleComponent from "../Title/Title";
import { img_url_base } from "../../utils/utils";
import { Col, Divider, Image, Row, Space } from "antd";
import CompanyList from "../Company/CompanyList";

const DetailComponent: FC<{ movie: IGetMovieDetailResponse }> = ({ movie }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 33px",
      }}
    >
      <TitleComponent title={movie.title} />
      <Space size="middle" direction="horizontal">
        <Image
          src={img_url_base + movie.backdrop_path}
          style={{ borderRadius: 8 }}
        />
        <Image
          src={img_url_base + movie.poster_path}
          style={{ borderRadius: 8 }}
        />
      </Space>
      <Divider />
      <p>
        <span style={{ fontWeight: 700 }}>Estrenada: </span>
        {movie.release_date}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Título original: </span>
        {movie.original_title}
      </p>
      {!!movie.adult && <p>Pelícuala para adultos</p>}
      <p style={{ textAlign: "justify" }}>{movie.overview}</p>
      <span style={{ fontWeight: 700 }}>Generos:</span>
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {movie.genres.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <p>
        <span style={{ fontWeight: 700 }}>Sitio Web: </span>
        <a href={movie.homepage} target="_blank">
          {movie.homepage}
        </a>
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Popularidad: </span>
        {movie.popularity}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Presupuesto: </span>
        {movie.budget}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Ganancia: </span>
        {movie.revenue}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Votos: </span>
        {movie.vote_count}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Average: </span>
        {movie.vote_average}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Productoras:</span>
      </p>

      <CompanyList companies={movie.production_companies} />
    </div>
  );
};

export default DetailComponent;
