import { Row, Space } from "antd";
import { FC } from "react";
import CompanyCard from "./CompanyCard";

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
