import React from "react";
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import styles from './primary-service-modal.module.scss';
import {ReactComponent as Paw} from './../../images/paw.svg';

function PrimaryServiceModalComponent({title, description, details, id}: PrimaryServiceCard) {
    return (
        <div className={styles.primaryServiceContainer}>
            <div className={styles.containerHeading}>
                <h2>{title}</h2>
            </div>
            <div className={styles.containerBody}>
                <div className={styles.containerContent}>
                    {
                        description.length ? <p>{description}</p> : null
                    }
                    {
                        details.length ? (
                            <ul>
                                {
                                    details.map((detail: string) => (
                                        <li key={detail}>
                                            <Paw className={styles.icon}/>
                                            {detail}
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default PrimaryServiceModalComponent;
