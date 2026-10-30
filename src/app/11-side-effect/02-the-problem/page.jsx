"use client";
import "./styles.css"
import Timer from "./Timer";
import Settings from "./Settings";

import { useState } from 'react';

export default function IntervalNavigateDemo() {
    const [screen, setScreen] = useState('timer');

    return (
        <div className="container">
            <div className="nav">
                <button
                    type="button"
                    className={screen === 'timer' ? 'active' : ''}
                    onClick={() => setScreen('timer')}
                >
                    Timer
                </button>
                <button
                    type="button"
                    className={screen === 'settings' ? 'active' : ''}
                    onClick={() => setScreen('settings')}
                >
                    Settings
                </button>
            </div>

            {screen === 'timer' ? <Timer /> : <Settings />}

        </div>)
}