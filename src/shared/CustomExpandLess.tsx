import React from 'react';
import {MdExpandLess} from "react-icons/all";
import {Fab} from "@material-ui/core";
import styles from "./ControlArrows.module.scss";

interface Props {
    disabled: boolean;
    handleClick: any;
}

function CustomExpandLess({ disabled, handleClick }: Props) {
    return (
        <Fab
            className={[styles.noOutline, styles.topMargin].join(' ')}
            aria-label="left"
            disabled={disabled}>
            <MdExpandLess
                size={'40px'}
                onClick={handleClick}/>
        </Fab>
    )
}

export default CustomExpandLess;
