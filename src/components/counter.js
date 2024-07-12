import React, { useState } from 'react';
import './counter.css'; 


function Counter() {

    const [count, setCount] = useState(0)
    const [isActive, setActive] = useState(true)

    const increment = () => {
        setCount(count + 1)
        setActive(!isActive)
        
    }
    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={`button1 ${isActive ? 'active' : ''}`} onClick={increment}>+</button>
            <button className={`button1 ${isActive ? 'active' : ''}`} onClick={decrement}>-</button>
        </div>
    )
}

export default Counter