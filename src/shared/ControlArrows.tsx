import React, {useState} from "react";
import styles from './ControlArrows.module.scss';
import CustomChevronRight from "./CustomChevronRight";
import CustomChevronLeft from "./CustomChevronLeft";


function ControlArrows(props: ControlArrows) {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.chevron}>
            <CustomChevronLeft
                disabled={!count}
                handleClick={() => handleClick('decrease')} />
            <CustomChevronRight
                disabled={count === props.maxCount - 1}
                handleClick={() => handleClick('increase')} />
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
