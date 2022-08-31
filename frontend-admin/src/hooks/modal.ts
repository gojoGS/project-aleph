import { useState } from "react";

const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggle = () => {
        setModalOpen(!modalOpen);
    };

    return {
        modalOpen,
        setModalOpen,
        toggle,
    };
};

export default useModal;
