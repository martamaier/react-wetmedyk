import React from "react";
import {Modal} from "react-bootstrap";
import styles from './modal.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CloseModal } from "../store/modal-store/actions";
import PrimaryServiceModalComponent from "../wet-page/components/primary-service-modal.component";

function AppModal() {
    const dispatch = useDispatch();
    const { data, shouldDisplay, contentType } = useSelector((state: RootState) => state.modal);
    const img = data?.image ? data.image :
        "http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg";
    return (
        <Modal
            size="lg"
            centered
            onHide={() => dispatch(CloseModal())}
            show={shouldDisplay}>
            <Modal.Body>
                {
                    contentType === 'service' ? <PrimaryServiceModalComponent {...data} /> : (
                        <div className={styles.modal}>
                            <div className={styles.modalContent}>
                                <div className={styles.modalContentImg}>
                                    {data?.image && <img src={img} alt=""/>}
                                </div>
                                <div className={styles.modalContentInfo}>
                                    <h3>{data.heading}</h3>
                                    <h4>{data.subHeading}</h4>
                                    <div>
                                        {
                                            data.description
                                                .split(';')
                                                .map((sentence: string, index: number) => (
                                                    <div key={index}>{sentence}</div>
                                                    )
                                                )
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </Modal.Body>
        </Modal>)
}

export default AppModal;
