"use client";
import { useState } from "react";

export default function Home(){

    let [isUpperCase,setIsUpperCase]= useState(false);

    let letter = "hello javascript";

    function upperCase(){
            letter = letter.toUpperCase();
            console.log(letter);
            setIsUpperCase(!isUpperCase);
            console.log(isUpperCase);
            return letter;
    }

    function lowerCase(){
            letter = letter.toLowerCase();
            console.log(letter);
            setIsUpperCase(isUpperCase);
            console.log(isUpperCase);
            return letter;
    }

    return(
        <div>
            <h1>{letter}</h1>
            <button onClick={upperCase} >To UpperCase</button>
            <button onClick={lowerCase} >To LowerCase</button>
        </div>
    )
}