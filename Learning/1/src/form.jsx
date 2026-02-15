import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("Guest");

    // function change(val) {
    //     setName(val);
    // }

    return (<form>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <p>Welcome to my website {name}</p>
    </form>);
}

export default Form;