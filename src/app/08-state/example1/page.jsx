// This will make the component a client component.
// By default, all components are server components.
"use client";

import { useState } from "react";
import "./styles.css";
/*
        // This is my state
        let boxColor = "blue";

        // Rendering
        const box = document.querySelector(".box");

        function render() {
            // Render function will update the UI based on the state
            box.style.backgroundColor = boxColor;
        }

        render(); // Initial render

        // Setup event listeners
        box.addEventListener("click", function () {.
            if (boxColor === "blue") {
                boxColor = "red";
            } else {
                boxColor = "blue";
            }
            render(); // Re-render the UI after state change
        })
*/
//<div class="box"></div>
// Yellow color for functions
export default function ColorBox() {
    const [boxColor, setBoxColor] = useState("red");

    function handleClick() {
        if (boxColor === "red") { // read operation
            setBoxColor("blue"); // write operation
        } else {
            setBoxColor("red"); // write operation
        }
    }
    return (

            <button onClick={handleClick} className="box" style={{ background: boxColor }}></button>
        
    )
}