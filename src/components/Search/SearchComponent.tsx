import { Input } from "antd";
import { FC } from "react";
import useSearch from "../../hooks/useSearch";

/**
 * Render the input for search by text
 * @returns input for search by text
 */
const SearchComponent: FC = () => {
  const { handleSearch } = useSearch();

  return (
    <Input
      placeholder="Search..."
      style={{
        width: 200,
        marginBottom: 15,
        height: 35,
        borderRadius: 8,
        margin: "auto",
      }}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchComponent;
