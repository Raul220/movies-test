import { Card, Image } from "antd";
import { FC } from "react";
import { img_url_base } from "../../utils/utils";

const CompanyCard: FC<{company: IProducton_Company}> = ({company}) => {
return (
    <Card
      title={company.name}
      style={{margin: "2.5px" }}
    >
      <Image width={50} src={img_url_base + company.logo_path} style={{ borderRadius: 8 }} />
    </Card>
)
}

export default CompanyCard;