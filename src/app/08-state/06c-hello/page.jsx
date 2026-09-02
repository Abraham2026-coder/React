"use client";
import { useState } from "react";

export default function Home(){

    let [isUpperCase,setIsUpperCase]= useState(false);
    let [letter, setLetter] = useState("hello javascript"); 

    function upperCase(){
            setLetter(letter.toUpperCase());
            setIsUpperCase(!isUpperCase);
    }

    function lowerCase(){
            setLetter(letter.toLowerCase());
            setIsUpperCase(isUpperCase);
    }

    return(
        <div>
            <h1>{letter}</h1>
            <button onClick={upperCase} >To UpperCase</button>
            <button onClick={lowerCase} >To LowerCase</button>
        </div>
    )
}