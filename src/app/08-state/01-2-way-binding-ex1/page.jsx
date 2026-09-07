"use client";
import { useState } from "react";
import "./style.css";
import React from "react";
//const [boxColor, setBoxColor] = useState("red"); invalid hook call, 
// hooks can only be called inside the body of a function component.
function Box() {
    const [boxColor, setBoxColor] = useState("red");
    function changeColor() {
        if (boxColor === "red") {
            setBoxColor("blue");
        } else {
            setBoxColor("red");
        }
    }
    return (
        <div onClick={changeColor} className="box" style={{ backgroundColor: boxColor }}></div>
    );
}

export default function ColorBox() {

    return (
        <div>
            <Box />
            <Box />
            <Box />
        </div>
    )
}