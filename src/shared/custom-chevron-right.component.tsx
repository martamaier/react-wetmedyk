import React from 'react';
import {Fab} from "@material-ui/core";
import styles from "./control-arrows.module.scss";
import {MdChevronRight} from "react-icons/md";
import {ChevronPayload} from "../models/chevron-payload.interfaces";


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
