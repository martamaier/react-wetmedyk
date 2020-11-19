import React from "react";
import styles from './Button.module.scss';

interface Props {
    text: string;
    type: 'button' | 'submit';
    onClick?: Function;
    classes?: string[];
}

const button = ({ text, type, classes }: Props) => {
    const classNames = classes ?
        [styles.primaryButton, ...classes] :
        [styles.primaryButton];
    return (
        <button
            type={type}
            className={classNames.join(' ')}>{text}</button>
    )
};

export default button;
