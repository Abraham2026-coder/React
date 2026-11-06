'use client';

import { useState } from 'react';
import Breathing from './Breathing';
import Stats from './Stats';
import './styles.css';

export default function BreathingAssignment() {
  const [screen, setScreen] = useState('breathing');

  return (
    <div className="container">
      <h1 className="title">Assignment 2: Find the Bug</h1>
      <p className="description">
        The <code>Breathing</code> component switches between{' '}
        <strong>Breathe in</strong> and <strong>Breathe out</strong> every 3
        seconds. It looks fine at first — but something is wrong. Open the
        console, switch between <strong>Breathing</strong> and{' '}
        <strong>Stats</strong> a few times, and watch what happens. Then
        fix the bug in <code>Breathing.jsx</code>.
      </p>

      <div className="nav">
        <button
          type="button"
          className={screen === 'breathing' ? 'active' : ''}
          onClick={() => setScreen('breathing')}
        >
          Breathing
        </button>
        <button
          type="button"
          className={screen === 'stats' ? 'active' : ''}
          onClick={() => setScreen('stats')}
        >
          Stats
        </button>
      </div>

      {screen === 'breathing' ? <Breathing /> : <Stats />}
    </div>
  );
}
