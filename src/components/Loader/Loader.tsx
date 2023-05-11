import { Spin } from "antd";
import { FC } from "react";

const Loader: FC = () => (
  <div style={{ margin: "auto 350px" }}>
    <Spin size="large" />
  </div>
);
export default Loader;
