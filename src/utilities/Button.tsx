import React from "react";
import styles from './Button.module.scss';

const button = (props: {
    text: string,
    type: 'button' | 'submit',
    onClick?: Function,
    classes?: string[],
}) => {
    const classes = props?.classes ?
        [styles.primaryButton, ...props.classes] :
        [styles.primaryButton];
    return (
        <button
            type={props.type}
            // onClick={(event) => props?.onClick(event)}
            className={classes.join(' ')}>{props.text}</button>
    )
};

export default button;
