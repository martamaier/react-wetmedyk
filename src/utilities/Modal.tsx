import React from "react";
import {Modal} from "react-bootstrap";
import {ModalData} from "../models/ModalData.model";

const appModal = (props: ModalData) => {
    return <Modal
        size="lg"
        centered
        onHide={() => props.toggleModal()}
        show={props.displayModal}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>
}

export default appModal;
