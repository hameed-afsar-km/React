import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState("0");
    const [inputValue, setInputValue] = useState("");
    const [inputValueTest, setInputValueTest] = useState("");

    function change() {
        setName(inputValue);
    }

    function change2() {
        setAge(inputValueTest);
    }

    return (
        <>
            <div>
                <input type="text" placeholder='Enter Your Name' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <br />
                <br />
                <button type="button" onClick={change}>Change Name</button>
                <br />
                <p>{name}, Welcome!</p>
            </div>

            <div>
                <input type="number" placeholder='Enter Your Age' value={inputValueTest} onChange={(e) => setInputValueTest(e.target.value)}></input>
                <br />
                <br />
                <button type="button" onClick={change2}>Change Age</button>
                <br />
                <p>You are {age} years old!</p>
            </div>
        </>);
}

export default MyComponent;