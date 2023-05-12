import { Row, Space } from "antd";
import { FC } from "react";
import CompanyCard from "./CompanyCard";

/**
 * Render the company list that product the movie 
 * @param param0 productors list
 * @returns Movie production company list
 */
const CompanyList: FC<{ companies: IProducton_Company[] }> = ({
  companies,
}) => {
  return (
    <Space size="middle" direction="horizontal">
      <Row justify="center">
        {companies.map((item, index) => (
          <CompanyCard company={item} key={index} />
        ))}
      </Row>
    </Space>
  );
};
export default CompanyList;
