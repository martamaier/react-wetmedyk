import React from 'react';
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import styles from './PrimaryService.module.scss';
import chevronWrapperStyles from './../../shared/ControlArrows.module.scss';
import CustomChevronRight from "../../shared/CustomChevronRight";

function PrimaryService(props: PrimaryServiceCard) {
    return (
        <article className={styles.primaryService}>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            {
                props.description.length ? <p>{props.description}</p> : null
            }
            {
                props.details.length ? (
                    <ul>
                        {
                            (props.details).map((listItem: string) => (
                                <li key={listItem}>{listItem}</li>
                            ))
                        }
                    </ul>
                ) : null
            }
            <div className={chevronWrapperStyles.chevron}>
                <CustomChevronRight disabled={false} handleClick={console.log('click')} />
            </div>
        </article>)
}

export default PrimaryService;
