import React from "react";
import styles from './ControlArrows.module.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Fab} from "@material-ui/core";


function ControlArrows(props: ControlArrows) {
    return (
        <div className={styles.chevron}>
            <Fab
                className={styles.noOutline}
                color="primary"
                aria-label="left"
                disabled={true}>
                <MdChevronLeft
                    size={'40px'}
                    onClick={() => props.onLeftClick('left')}/>
            </Fab>
            <Fab
                className={styles.noOutline}
                color="primary"
                aria-label="right">
                <MdChevronRight
                    size={'40px'}
                    onClick={() => props.onRightClick('right')}/>
            </Fab>
        </div>)
}

export default ControlArrows;

interface ControlArrows {
    onRightClick: Function;
    onLeftClick: Function;
}
