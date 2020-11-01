import React from "react";
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import {CURRENT_ENV} from "../../environment";

function PrimaryServiceModalComponent({ title, image, description, details }: PrimaryServiceCard) {
    return (
        <div>
            {title}
            <img src={`${CURRENT_ENV}/${image}`} alt={title}/>
            {
                description.length ? <p>{description}</p> : null
            }
            {
                details.length ? (
                    <ul>
                        {
                            details.map((detail: string) => (
                                <li key={detail}>{detail}</li>
                            ))
                        }
                    </ul>
                ) : null
            }
        </div>
    )
}

export default PrimaryServiceModalComponent;
