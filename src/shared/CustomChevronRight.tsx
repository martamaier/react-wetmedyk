import React from 'react';
import {Fab} from "@material-ui/core";
import styles from "./ControlArrows.module.scss";
import {MdChevronRight} from "react-icons/md";


function CustomChevronRight(props: { disabled: boolean, handleClick: any }) {
    return (
        <Fab
            className={styles.noOutline}
            color="primary"
            disabled={props.disabled}
            aria-label="right">
            <MdChevronRight
                size={'40px'}
                onClick={props.handleClick}/>
        </Fab>)
}


export default CustomChevronRight;
