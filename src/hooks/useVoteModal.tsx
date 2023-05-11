import { useState } from "react";
import { createGuestSession, rateMovie } from "../services/moviesServices";
import { api_key } from "../utils/utils";
import { Form } from "antd";
import { useParams } from "react-router";

const useVoteModal = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [value, setValue] = useState(0.5);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (id) {
      createGuestSession({ api_key })
        .then((res) => {
          console.log(res);
          rateMovie({
            api_key,
            guest_session_id: res.guest_session_id,
            movie_id: id,
            value,
          })
          .then(response => {
            if(response.success) {
                alert("La puntuacion ha sido enviada")
            } else {
                alert("La votacion no ha sido enviada")
            }
          })
          .catch(e => console.log(e))
        })
        .catch((e) => console.log(e))
        .finally(handleCancel);
    }
  };

  const handleCancel = () => {
    setValue(0);
    setIsModalOpen(false);
  };

  return { isModalOpen, showModal, handleOk, handleCancel, form, setValue, value };
};

export default useVoteModal;
