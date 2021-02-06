import React from "react";
import {ServiceCard} from "../../models/service-card.interface";
import styles from './service-card.module.scss';
import {MdLocationCity, MdLoyalty, MdShoppingCart} from "react-icons/all";
import {IconTypes} from "../../models/icon.types";

const serviceCard = (props: ServiceCard) => (
    <article className={styles.cardService}>
        <div className={[styles.cardServiceSide, styles.cardServiceFront].join(' ')}>
            <div className={styles.materialIcons}>
                {props.icon === IconTypes.Hotel ?
                    <MdLocationCity /> : (props.icon === IconTypes.Loyalty ?
                        <MdLoyalty /> : <MdShoppingCart />) }
            </div>
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
