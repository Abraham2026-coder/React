"use client";
import { useState } from "react";

export default function Home() {

    const [isUpperCase, setIsUpperCase] = useState(false);

    function upperCase() {
        setIsUpperCase(true);
        // text = text.toUpperCase();
    }
    function lowerCase() {
        setIsUpperCase(false);
        // text = text.toLowerCase();
    }

    //derived properties, means values are derived based on the state
    const text = "hello javascript";
    const letter = isUpperCase ? text.toUpperCase() : text.toLowerCase();

    return (
        <div>
            <h1>{letter}</h1>
            <button onClick={upperCase} >To UpperCase</button>
            <button onClick={lowerCase} >To LowerCase</button>
        </div>
    )
}

//Snapshot 1 (output of render 1):
{/*
<div>
    <h1>hello javascript</h1>
    <button onClick={upperCase} >To UpperCase</button>
    <button onClick={lowerCase} >To LowerCase</button>
</div> 
*/}

// click To Uppercase
// Snapshot 2 (output of render 2):
{/* 
<div>
    <h1>HELLO JAVASCRIPT</h1>
    <button onClick={upperCase} >To UpperCase</button>
    <button onClick={lowerCase} >To LowerCase</button>
</div> */}

// React will compare the new snapshot with the old snapshot and update only changed DOM elements