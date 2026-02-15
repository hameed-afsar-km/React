import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("None");
    const [shipping, setShipping] = useState("");

    function handleshipping(event) {
        setShipping(event.target.value);
    }

    return (<form>
        <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <p>Welcome to my website {name}</p>
        <input type="number" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
        <p>Your Age is {age}</p>
        <textarea placeholder="Enter your comments..." onChange={(e) => setComment(e.target.value)}></textarea>
        <p>Comment: {comment}</p>
        <select onChange={(e) => setPayment(e.target.value)}>
            <option value="" selected>Select an Option</option>
            <option value="Gpay">GPay</option>
            <option value="PayTM">PayTM</option>
            <option value="UPI">UPI</option>
        </select>
        <p>You Selected {payment}</p>

        <label>
            <input type="radio" value="Pickup" id="ship" name="ship" onChange={handleshipping}></input>PickUp
        </label>

        <label>
            <input type="radio" value="Delivery" id="ship" name="ship" onChange={handleshipping}></input>Delivery
        </label>
        <p>Shipment Method: {shipping}</p>

    </form>);
}

export default Form;