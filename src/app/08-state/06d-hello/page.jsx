"use client";
import { useState } from "react";

export default function Home(){

    let [isUpperCase,setIsUpperCase]= useState(false);

    function upperCase(){
             setIsUpperCase(true);
    }
    function lowerCase(){
            setIsUpperCase(false);
    }
  
    const text = "hello javascript";
    const letter = isUpperCase ? text.toUpperCase() : text.toLowerCase();

    return(
        <div>
            <h1>{letter}</h1>
            <button onClick={upperCase} >To UpperCase</button>
            <button onClick={lowerCase} >To LowerCase</button>
        </div>
    )
}