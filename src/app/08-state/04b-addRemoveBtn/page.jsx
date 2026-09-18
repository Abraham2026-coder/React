"use client";
import { useState } from "react";
import "./styles.css";


function Add({numBoxes}){
    for (let i = 1; i < numBoxes; i++) {
            return (
                <div className="box">
                </div>
            )
        }
}
function Remove({numBoxes}){
    for (let i = 1; i < numBoxes; i++) {
            return (
                <div className="box">
                </div>
            )
        }
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
            <Add numBoxes={numBoxes}/>
            <Remove numBoxes={numBoxes}/>


            
        </div>  
    )

}