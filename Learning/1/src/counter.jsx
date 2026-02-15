import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    function res() {
        setCount(0);
    }

    return (<div>
        <p>{count}</p>
        <button type="button" onClick={dec}>Decrease</button>
        <button type="button" onClick={res}>Reset</button>
        <button type="button" onClick={inc}>Increase</button>
    </div>)
}

export default Counter;