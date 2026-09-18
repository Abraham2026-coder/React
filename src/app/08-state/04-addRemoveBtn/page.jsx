"use client";
import { useState } from "react";
import "./styles.css";


export default function AddRemoveButtons() {
    const [numBoxes, setNumBoxes] = useState(10);
    function removeBtn() {
        if (numBoxes > 1) {
            setNumBoxes(numBoxes - 1);
        }
        for (let i = 1; i < numBoxes; i++) {
            return (
                <div className="box">
                </div>
            )
        }
    }

    function addBtn() {
        setNumBoxes(numBoxes + 1);
        for (let i = 1; i < numBoxes; i++) {
            return (
                <div className="box">
                </div>
            )
        }
    }
    
    return (
        
        <div>
            <button onClick={removeBtn} className="removeBtn" >-</button>
            
            <button onClick={addBtn} className="addBtn">+</button>
            
        </div>  
    )

}