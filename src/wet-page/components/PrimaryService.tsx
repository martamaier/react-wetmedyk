import React from 'react';
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import styles from './PrimaryService.module.scss';
import chevronWrapperStyles from './../../shared/ControlArrows.module.scss';
import CustomChevronRight from "../../shared/CustomChevronRight";
import {CURRENT_ENV} from "../../environment";
import ServicesIcon from "../../shared/ServicesIcon";

function PrimaryService(props: PrimaryServiceCard & { handleClick: any }) {
    return (
        <article className={styles.primaryService}>
            {/*<img src={`${CURRENT_ENV}/${props.image}`} alt={props.title} />*/}
            <ServicesIcon id={props.id} />
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
            <div className={[chevronWrapperStyles.chevron, styles.actionButton].join(' ')}>
                <CustomChevronRight
                    disabled={false}
                    handleClick={props.handleClick}
                    topMargin={false} />
            </div>
        </article>)
}

export default PrimaryService;
