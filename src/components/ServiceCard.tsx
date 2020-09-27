import React from "react";
import {ServiceCard} from "../models/ServiceCard.model";

const serviceCard = (props: ServiceCard) => (
    <article className="card-service">
        <div className="card-service-side card-service-front">
            <span className="material-icons">{props.icon}</span>
            <h3>{props.headingFront}</h3>
        </div>
        <div className="card-service-side card-service-back">
            <h3 className="back-heading">{props.headingBack}</h3>
            <ul>
                {
                    props.bulletPoints.map((point: string) => (
                        <li>{point}</li>
                    ))
                }
            </ul>
        </div>
    </article>
);

export default serviceCard;
