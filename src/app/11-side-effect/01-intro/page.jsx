"use client";
import "./styles.css"

import { useState, useEffect } from "react";

// useState belongs to React
// useEffect belongs to React
// setInterval doesn't belong to React
export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log("Interval running");
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
    }, [])
    // When dependency array = [], the side-effect never reloads

    return (
        <div className="panel">
            <p className="panel-label">Timer</p>
            <p className="seconds">{seconds}s</p>
        </div>
    );
}