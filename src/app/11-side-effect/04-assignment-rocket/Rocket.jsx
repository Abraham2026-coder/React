'use client';

import { useEffect, useState } from 'react';

export default function Rocket() {
  const [altitude, setAltitude] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(()=>{
    console.log("rocket 23 has launched");
  },[])
   // runs just once
  useEffect(() => {
    const Interval = setInterval(() => {
      console.log("Rocket is climbing");
      setAltitude(altitude + 100);
    }, 1000) // runs every 1000 ms.
    return () => {
      clearInterval(altitude, seconds); // clearing or resetting al
    }
  }, [seconds, altitude]); // depended on seconds and altitude
   console.log("the rocket has landed");



  // TODO: Write a useEffect that:()
  //   1. Starts a timer that runs every 1000 ms.
  //   2. Each time it runs, adds 100 to the altitude.
  //   3. Logs "Rocket <id> launched" when the timer starts.
  //   4. Logs "Rocket <id> climbing" every time it runs.
  //   5. Stops the timer and logs "Rocket <id> landed" when the
  //      Rocket leaves the page.
  //
  // Expected console when you open the page, wait 2 seconds,
  // then click Mission Log (the ids will be different for you):
  //   Rocket 5 launched
  //   Rocket 5 climbing
  //   Rocket 5 climbing
  //   Rocket 5 landed

  return (
    <div className="panel">
      <p className="panel-label">Rocket</p>
      <p className="seconds">{altitude} m</p>
    </div>
  );
}
