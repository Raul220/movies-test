import { Input } from "antd";
import { FC } from "react";
import useSearch from "../../hooks/useSearch";

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
