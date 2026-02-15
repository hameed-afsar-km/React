import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleChange(e) {
        setColor(e.target.value);

    }

    return (<>
        <div>
            <input type="color" onChange={handleChange}></input>
            <p>Selected Color: {color}</p>
        </ div >
        <div style={{ backgroundColor: color, borderRadius: 5 }} >
            <p>Color: {color}</p>
        </div>
    </>
    );
}

export default ColorPicker;