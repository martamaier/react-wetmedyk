import React from "react";
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import {CURRENT_ENV} from "../../environment";
import styles from './PrimaryServiceModalComponent.module.scss';
import { ReactComponent as Paw } from './../../images/paw.svg';

function PrimaryServiceModalComponent({ title, image, description, details }: PrimaryServiceCard) {
    return (
        <div className={styles.primaryServiceContainer}>
            <div className={styles.containerHeading}>
                <img src={`${CURRENT_ENV}/${image}`} alt={title}/>
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
                                            <Paw className={styles.icon} />
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
