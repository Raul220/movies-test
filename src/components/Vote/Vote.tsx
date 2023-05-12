import { FC } from "react";
import { Button, Form, Input, Modal } from "antd";
import useVoteModal from "../../hooks/useVoteModal";
import { LoadingOutlined } from "@ant-design/icons";

/**
 * Render the modal wwith a form to rate the movie
 * @param param0 title & poster of the movie to store in global state
 * @returns modal with form
 */
const VoteComponent: FC<{
  title: string;
  poster: string;
}> = ({ title, poster }) => {
  const {
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    form,
    setValue,
    value,
  } = useVoteModal();
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "white" }} spin />
  );

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Votar
      </Button>
      <Modal
        title="Puntúa la Película de 0.5 a 10"
        open={isModalOpen}
        onOk={() => handleOk(title, poster)}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item name="value">
            <Input
              type="number"
              value={value}
              max={10}
              min={0.5}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VoteComponent;
