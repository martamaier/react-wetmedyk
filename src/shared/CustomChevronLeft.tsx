import React from "react";
import {Fab} from "@material-ui/core";
import styles from "./ControlArrows.module.scss";
import {MdChevronLeft} from "react-icons/md";

interface Props {
    disabled: boolean;
    handleClick: any;
}

function CustomChevronLeft({ disabled, handleClick }: Props) {
    return (
        <Fab
            className={[styles.noOutline, styles.topMargin].join(' ')}
            color="primary"
            aria-label="left"
            disabled={disabled}>
            <MdChevronLeft
                size={'40px'}
                onClick={handleClick}/>
        </Fab>
    )
}

export default CustomChevronLeft;
