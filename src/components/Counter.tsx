import React, {useState} from 'react';
import "./Counter.scss";


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
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
        </div>
    );
};