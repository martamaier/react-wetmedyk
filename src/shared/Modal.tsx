import React from "react";
import {Modal} from "react-bootstrap";
import {ModalData} from "../models/ModalData.model";
import styles from './Modal.module.scss';

const appModal = (props: ModalData) => {
    const img = props.data?.image ?
        props.data.image :
        "http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg";
    return (
        <Modal
            size="lg"
            centered
            onHide={() => props.toggleModal()}
            show={props.displayModal}>
            <Modal.Body>
                {
                    props.children ? props.children : (
                        <div className={styles.modal}>
                            <div className={styles.modalContent}>
                                <div className={styles.modalContentImg}>
                                    <img src={img} alt=""/>
                                </div>
                                <div className={styles.modalContentInfo}>
                                    <h3>{props.data?.heading}</h3>
                                    <h4>{props.data?.subHeading}</h4>
                                    <p>{props.data?.description}</p>
                                </div>

                            </div>
                        </div>
                    )
                }
            </Modal.Body>
        </Modal>)
}

export default appModal;
