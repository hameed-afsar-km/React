import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");

    return (<form>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <p>Welcome to my website {name}</p>
        <input type="number" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
        <p>Your Age is {age}</p>
        <textarea placeholder="Enter your comments..." onChange={(e) => setComment(e.target.value)}></textarea>
        <p>Comment: {comment}</p>
    </form>);
}

export default Form;