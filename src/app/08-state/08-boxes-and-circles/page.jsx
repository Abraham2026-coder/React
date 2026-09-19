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


function Circles({ numCircles }) {
    const arr = []
    for (let i = 1; i < numCircles; i++) {
        arr.push(<div key={i} className="circle"></div>)
    }
    return <div>{arr}</div>
}



export default function BoxesCircles() {
    const [boxes, setBoxes] = useState(10);
    const [circles, setCircles] = useState(10);

    // Writer function should only update state
    function addBox() {
        setBoxes(boxes + 1)

    }
    function removeBox() {
        if (boxes > 0) {
            setBoxes(boxes - 1)
        }
    }
    function addCircle() {
        setCircles(circles +1)

    }
    function removeCircle() {
        if (circles > 0) {
            setCircles(circles -1)
        }

    }

    return (
        <div>
            <p>Boxes: {boxes}</p>
            <p>Circles: {circles}</p>
            <p></p>
            <button onClick={removeBox}>-Box</button>
            <button onClick={addBox}>+Box</button>
            <button onClick={removeCircle}>-Circle</button>
            <button onClick={addCircle}>+Circle</button>
            <Boxes numBoxes={boxes} />
            <Circles numCircles={circles} />
            
        </div>
    )
}