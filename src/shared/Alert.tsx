import React from "react";
import {Alert} from "react-bootstrap";
import {Statuses} from "../models/ResponseStatuses";
import styles from './Alert.module.scss';

interface Props {
    message: string,
    status: number,
    onClose: Function,
}

const alert = ({ message, status, onClose }: Props) => (
    <div className={styles.alertContainer}>
        <Alert onClose={() => onClose(false, null, null)}
               variant={status === Statuses.Success ? 'success' :
                   (status === Statuses.Warning ? 'warning' : 'danger')}
               dismissible>
            <p className="mb-0">{message}</p>
        </Alert>
    </div>
);

export default alert;
