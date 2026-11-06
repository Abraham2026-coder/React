'use client';

import { useState } from 'react';
import Rocket from './Rocket';
import MissionLog from './MissionLog';
import './styles.css';

export default function RocketAssignment() {
  const [screen, setScreen] = useState('rocket');

  return (
    <div className="container">
      <h1 className="title">Assignment 1: Rocket Altitude</h1>
      <p className="description">
        Finish the <code>Rocket</code> component so its altitude goes up by
        100 m every second. Switching to <strong>Mission Log</strong> must
        stop the rocket completely, and switching back must start a fresh
        flight from 0 m. Use the console to prove only one rocket is ever
        flying.
      </p>

      <div className="nav">
        <button
          type="button"
          className={screen === 'rocket' ? 'active' : ''}
          onClick={() => setScreen('rocket')}
        >
          Rocket
        </button>
        <button
          type="button"
          className={screen === 'log' ? 'active' : ''}
          onClick={() => setScreen('log')}
        >
          Mission Log
        </button>
      </div>

      {screen === 'rocket' ? <Rocket /> : <MissionLog />}
    </div>
  );
}
