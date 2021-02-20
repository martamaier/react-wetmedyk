import React from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import classes from './primary-service.module.scss';
import ServicesIcon from "../../shared/services-icon.component";

function PrimaryService(
    { title, description, details, handleClick, icon }: PrimaryServiceCard & { handleClick: any },
) {
    return (
        <article className={classes.primaryService}>
            <ServicesIcon name={icon} />
            <h3 className={classes.actionButton} onClick={handleClick}>{title}</h3>
            <h3 className={classes.nonActionButton}>{title}</h3>
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
