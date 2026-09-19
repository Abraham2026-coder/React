"use client";
import { useState } from "react";
import "./styles.css";


/*
1. State holds all the information.
2. The JSX returned by the function (component) will be rendered by React. This is where we read state.
3. The event handlers update state. We write state here.
*/
export default function AddRemoveButtons() {
    // State
    const [numBoxes, setNumBoxes] = useState(10);
       function removeBtn() {
        if (numBoxes > 1) {
            setNumBoxes(numBoxes - 1);
        }
    }

    function addBtn() {
        setNumBoxes(numBoxes + 1);
    }

    /*
    function removeBtn() {
        // Update State
        if (numBoxes > 1) {
            setNumBoxes(numBoxes - 1);
        }

        // Return JSX
        // for (let i = 1; i < numBoxes; i++) {
        //     return (
        //         <div className="box">
        //         </div>
        //     )
        // }
    }

    function addBtn() {
        setNumBoxes(numBoxes + 1);
        // for (let i = 1; i < numBoxes; i++) {
        //     return (
        //         <div className="box">
        //         </div>
        //     )
        // }
    }

    const numAdd = function Add() {
        for (let i = 1; i < numBoxes; i++) {
            return (
                numBoxes

            )
        }
    }
*/


    const arr = [];
    for (let i = 1; i <= numBoxes; i++) {
        arr.push(<div key={i} className="box">
        </div>)
    }

    // What we return here (from the component function) is rendered by React
    return (

        <div>
            <button onClick={removeBtn} className="removeBtn" >-</button>
            <button onClick={addBtn} className="addBtn">+</button>

            <div>{arr}</div>
        </div>
    )

}