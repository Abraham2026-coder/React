
import { useState, useEffect } from 'react';

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let tick = 0;
        const intervalId = setInterval(() => {
            tick += 1;
            console.log(`Interval ${intervalId} is still running (tick ${tick})`);
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)

        console.log(`Interval ${intervalId} started`);
    }, [])
    // When dependency array = [], the side-effect never reloads

    return (
        <div className="panel">
            <p className="panel-label">Timer</p>
            <p className="seconds">{seconds}s</p>
        </div>
    );
}

// Timer rendered -> useEffect -> setInterval 
// Settings rendered
// Timer rendered -> useEffect -> setInterval