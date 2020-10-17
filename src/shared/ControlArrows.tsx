import React from "react";
import styles from './ControlArrows.module.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


const controlArrows = (props: ControlArrows) => (
        <>
            <div className={styles.chevron}>
                <MdChevronLeft onClick={() => props.onLeftClick('left')}/>
                <MdChevronRight onClick={() => props.onRightClick('right')}/>
            </div>
        </>
    );

export default controlArrows;

interface ControlArrows {
    onRightClick: Function;
    onLeftClick: Function;
}
