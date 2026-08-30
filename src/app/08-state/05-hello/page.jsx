"use client";
import { useState } from "react";


export default function Home() {
   
    const [letter, setChangeLetter] = useState("hello javascript");

    function handleClick() {
        if (letter === "hello javascript") {
            setChangeLetter(letter.toUpperCase());
        } else {
            setChangeLetter(letter.toLowerCase());
        }
    }
    return (
        <div>
            <h1>{letter}</h1>
            <button onClick={handleClick}  style={{ background: "#e3e9f2ff" }} > ToggleCase</button>
        </div>

    )

}