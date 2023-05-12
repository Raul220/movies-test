import { Spin } from "antd";
import { FC } from "react";

/**
 * Spin that is shown while data is loading
 * @returns Spin 
 */
const Loader: FC = () => (
  <div style={{ margin: "auto 350px" }}>
    <Spin size="large" />
  </div>
);
export default Loader;
