import React from "react";
import {ServiceCard} from "../models/ServiceCard.model";
import styles from './ServiceCard.module.scss';

const serviceCard = (props: ServiceCard) => (
    <article className={styles.cardService}>
        <div className={[styles.cardServiceSide, styles.cardServiceFront].join(' ')}>
            <span className={styles.materialIcons}>{props.icon}</span>
            <h3>{props.headingFront}</h3>
        </div>
        <div className={[styles.cardServiceSide, styles.cardServiceBack].join(' ')}>
            <h3 className={styles.backHeading}>{props.headingBack}</h3>
            <ul>
                {
                    props.bulletPoints.map((point: string) => (
                        <li key={point}>{point}</li>
                    ))
                }
            </ul>
        </div>
    </article>
);

export default serviceCard;
