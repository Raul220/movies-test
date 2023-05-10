import { FC } from "react";

const TitleComponent: FC<{ title: string }> = ({ title }) => {
  return (
    <h2
      style={{
        marginBottom: 20,
        textAlign: "center",
      }}
    >
      {title}
    </h2>
  );
};

export default TitleComponent;
