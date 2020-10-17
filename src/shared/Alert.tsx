import React from "react";
import {Alert} from "react-bootstrap";
import {Statuses} from "../models/ResponseStatuses";
import styles from './Alert.module.scss';

const alert = (props: {
    message: string,
    status: number,
    onClose: Function,
}) => (
    <div className={styles.alertContainer}>
        <Alert onClose={() => props.onClose(false, null, null)}
               variant={props.status === Statuses.Success ? 'success' :
                   (props.status === Statuses.Warning ? 'warning' : 'danger')}
               dismissible>
            <p className="mb-0">{props.message}</p>
        </Alert>
    </div>
);

export default alert;
