'use client'

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}