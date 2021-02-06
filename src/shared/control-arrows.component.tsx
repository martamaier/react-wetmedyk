import React, {useState} from "react";
import styles from './control-arrows.module.scss';
import CustomChevronRight from "./custom-chevron-right.component";
import CustomChevronLeft from "./custom-chevron-left.component";

interface ControlArrows {
    maxCount: number
    onRightClick: Function;
    onLeftClick: Function;
}

function ControlArrows({ maxCount, onRightClick, onLeftClick }: ControlArrows) {
    const [count, setCount] = useState(0);
    const handleClick = (actionType: string) => {
        actionType === 'increase' ? handleIncrease() : handleDecrease();
    }
    const handleIncrease = () => {
        setCount(count + 1);
        onRightClick();
    }
    const handleDecrease = () => {
        setCount(count - 1);
        onLeftClick();
    }
    return (
        <div className={styles.chevron}>
            <CustomChevronLeft
                disabled={!count}
                handleClick={() => handleClick('decrease')} />
            <CustomChevronRight
                disabled={count === maxCount - 1}
                handleClick={() => handleClick('increase')} />
        </div>)
}

export default ControlArrows;
