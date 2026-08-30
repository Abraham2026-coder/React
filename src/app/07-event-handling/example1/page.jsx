
"use client";
import "./styles.css";
import React from "react";


// By default, all components are server components and they don't support
//  client functionalities like button clicks

function AlertButton({ text, message }) {
    return (
        <div className="alert-button">
            <button onClick={() => alert(message)}>{text}</button>

        </div>
    );
}
export default function Homepage() {
    const createElementOutput = React.createElement(AlertButton, {text: "Stop", message: "Stopped"})
    console.log(createElementOutput);

    return (
        <div>
            {/* JSX Syntax */}
            <AlertButton text="Play" message={"Playing"} />
            {/* Function invocation behind JSX */}
            {createElementOutput}
        </div>
    )
}

// Review 04-props/example 4 and example5 and complete this exercise

// <button>Play<button/>