import React from 'react';
import {Fab} from "@material-ui/core";
import styles from "./ControlArrows.module.scss";
import {MdChevronRight} from "react-icons/md";
import {ChevronPayload} from "../models/ChevronPayload.model";


function CustomChevronRight({ disabled, handleClick, topMargin = true }: ChevronPayload) {
    const classes = topMargin ?
        [styles.noOutline, styles.topMargin] :
        [styles.noOutline];
    return (
        <Fab
            className={classes.join(' ')}
            color="primary"
            disabled={disabled}
            aria-label="right">
            <MdChevronRight
                size={'40px'}
                onClick={handleClick}/>
        </Fab>)
}


export default CustomChevronRight;
