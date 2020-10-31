import React from "react";
import {Fab} from "@material-ui/core";
import styles from "./ControlArrows.module.scss";
import {MdChevronLeft} from "react-icons/md";

function CustomChevronLeft(props: { disabled: boolean, handleClick: any }) {
    return (
        <Fab
            className={styles.noOutline}
            color="primary"
            aria-label="left"
            disabled={props.disabled}>
            <MdChevronLeft
                size={'40px'}
                onClick={props.handleClick}/>
        </Fab>
    )
}

export default CustomChevronLeft;
