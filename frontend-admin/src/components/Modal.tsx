import React, { PropsWithChildren, useState } from "react";
import NewModule from "../pages/module/NewModule";

export interface ModalPropse extends PropsWithChildren {
    modalOpem: boolean;
}

const Modal: React.FC<ModalPropse> = ({ modalOpem, children }) => {
    return (
        <div className={`modal ${modalOpem ? "modal-open" : ""}`}>
            <div className="modal-box p-0">{children}</div>
        </div>
    );
};

export default Modal;
