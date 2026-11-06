'use client';

import { useEffect, useState } from 'react';

export default function Rocket() {
  const [altitude, setAltitude] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const IntervalID = setInterval(() => {
      console.log("Rocket is climbing: " + IntervalID);
      
      setAltitude(prevAltitude => {
        const newAltitude = prevAltitude + speed;
        console.log({newAltitude , speed});
        return newAltitude;
      });
    }, 1000)

    return () => {
      clearInterval(IntervalID); // clearing or resetting al
      console.log("Rocket has landed: " + IntervalID);
    }
  }, []);
  function handelPlus(){
    setSpeed(speed + 100);

  }
  function handelMinus(){
     setSpeed(speed - 100);
  }

  return (
    <div className="panel">
      
      <p className="panel-label">Rocket</p>
      <p className="seconds">{altitude} m</p>
      <button onClick={handelPlus}>+</button>
      <button onClick={handelMinus}>-</button>
    </div>
  );
}
