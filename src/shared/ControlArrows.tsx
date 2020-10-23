import React, {useState} from "react";
import styles from './ControlArrows.module.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import {Fab} from "@material-ui/core";


function ControlArrows(props: ControlArrows) {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.chevron}>
            <Fab
                className={styles.noOutline}
                color="primary"
                aria-label="left"
                disabled={!count}>
                <MdChevronLeft
                    size={'40px'}
                    onClick={() => handleClick('decrease')}/>
            </Fab>
            <Fab
                className={styles.noOutline}
                color="primary"
                disabled={count === props.maxCount - 1}
                aria-label="right">
                <MdChevronRight
                    size={'40px'}
                    onClick={() => handleClick('increase')}/>
            </Fab>
        </div>)

    function handleClick(actionType: string) {
        actionType === 'increase' ? handleIncrease() : handleDecrease();
    }

    function handleIncrease() {
        setCount(count + 1);
        props.onRightClick();
    }

    function handleDecrease () {
        setCount(count - 1);
        props.onLeftClick();
    }
}

export default ControlArrows;

interface ControlArrows {
    maxCount: number
    onRightClick: Function;
    onLeftClick: Function;
}
