import React from "react";
import styles from './ControlArrows.module.scss';

const controlArrows = () => {
    const arrows = ['left', 'right'];
    return (
        <>
            {
                arrows.map((arrow: string) => (
                    <span key={arrow}
                          className={['materialIcons', styles.chevron].join(' ')}>
                        chevron_{arrow}
                    </span>
                ))
            }
        </>
    )
}

export default controlArrows;
