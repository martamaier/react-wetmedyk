import React from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import classes from './primary-service.module.scss';
import ServicesIcon from "../../shared/services-icon.component";

function PrimaryService(props: PrimaryServiceCard & { handleClick: any }) {
    const { id, title, description, details, handleClick } = props;
    return (
        <article className={classes.primaryService}>
            <ServicesIcon id={id} />
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