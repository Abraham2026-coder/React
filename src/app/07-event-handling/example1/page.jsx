"use client";
import "./styles.css";


// By default, all components are server components and they don't support client functionalities like button clicks

function AlertButton({ text, message }) {
    return (
        <div className="alert-button">
            <button onClick={() => alert(message)}>{text}</button>

        </div>
    );
}
export default function Homepage() {
    return (
        <div>
            <AlertButton text="Play" message={"Playing"} />
            <AlertButton text="Stop" message ={"Stopped"} />
        </div>
    )
}

// Review 04-props/example 4 and example5 and complete this exercise

// <button>Play<button/>