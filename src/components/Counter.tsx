import React, {useState} from 'react';
import styles from "./Counter.module.scss";


export const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return (
        <div>
            {count}
            <button className={styles.btn} onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};