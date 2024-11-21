import React, { useEffect, useState } from 'react';
import { toolsData } from '../../../imgData';
import classes from './Tools.module.css';

export const Tools = () => {

    const [activeEl, setActiveEL] = useState(toolsData[0]);

    useEffect(() => {
        let index = 0;
        let setActiveInterval = setInterval(() => {
            setActiveEL(toolsData[index]);
            index = (index + 1) % toolsData.length;
        }, 3500);

        return () => clearInterval(setActiveInterval);
    }, []);

    return (
        <div className={classes.tools}>
            {toolsData.map(item => {
                const isActive = activeEl.id === item.id;
                return (
                    <div
                        key={item.id}
                        className={`${classes['tools__img']} ${classes[item.id]} ${isActive ? classes.active : ''}`}
                    >
                        <img src={item.img} alt={item.id} />
                    </div>
                );
            })}
        </div>
    );
}
