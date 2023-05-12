import { FC } from "react";

/**
 * Render the title
 * @param param0 title text
 * @returns h2 
 */
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
