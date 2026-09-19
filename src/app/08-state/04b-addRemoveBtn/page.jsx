"use client";
import { useState } from "react";
import "./styles.css";


function Boxes({ numBoxes }) {
    const arr = []
    for (let i = 1; i < numBoxes; i++) {
        arr.push(<div key={i} className="box"></div>)
    }
    return <div>{arr}</div>
}


export default function AddRemoveButtons() {
    const [numBoxes, setNumBoxes] = useState(10);

    function removeBtn() {
        if (numBoxes > 1) {
            setNumBoxes(numBoxes - 1);
        }
    }

    function addBtn() {
        setNumBoxes(numBoxes + 1);
    }

    return (

        <div>
            <button onClick={removeBtn} className="removeBtn" >-</button>

            <button onClick={addBtn} className="addBtn">+</button>
            <Boxes numBoxes={numBoxes} />
        </div>
    )

}