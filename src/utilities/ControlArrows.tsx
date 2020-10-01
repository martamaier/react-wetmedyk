import React from "react";
import styles from './ControlArrows.module.scss';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';


const controlArrows = () => (
        <>
            <div className={styles.chevron}>
                <MdChevronLeft/>
                <MdChevronRight/>
            </div>
        </>
    );

export default controlArrows;
