import React from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import classes from './primary-service.module.scss';
import ServicesIcon from "../../shared/services-icon.component";

function PrimaryService(
    { title, description, details, handleClick, icon }: PrimaryServiceCard & { handleClick: any },
) {
    return (
        <article onClick={handleClick} className={classes.primaryService}>
            <ServicesIcon name={icon} />
            <h3 className={classes.actionButton}>{title}</h3>
            {
                description.length ? <p>{description}</p> : null
            }
            {
                details.length ? (
                    <ul>
                        {
                            details.map((listItem: string) => (
                                <li key={listItem}>{listItem}</li>
                            ))
                        }
                    </ul>
                ) : null
            }
        </article>)
}

export default PrimaryService;
