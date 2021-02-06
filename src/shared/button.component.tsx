import React from "react";
import styles from './button.module.scss';

interface Props {
    text: string;
    type: 'button' | 'submit';
    onClick?: Function;
    classes?: string[];
    children?: React.ReactChild;
}

const button = ({ text, type, classes, onClick, children }: Props) => {
    const classNames = classes ?
        [styles.primaryButton, ...classes] :
        [styles.primaryButton];
    return (
        <button
            // @ts-ignore
            onClick={onClick}
            type={type}
            className={classNames.join(' ')}>{ children ? children : null} {text}</button>
    )
};

export default button;
