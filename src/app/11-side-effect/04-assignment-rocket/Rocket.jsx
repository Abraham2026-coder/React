'use client';

import { useEffect, useState } from 'react';

export default function Rocket() {
  const [altitude, setAltitude] = useState(0);

  useEffect(() => {
    console.log("run only once");
  }, [])
  // runs just once
  useEffect(() => {
    const IntervalID = setInterval(() => {
      console.log("Rocket is climbing: " + IntervalID);

      // In the callback version, React will provide the updated state value
      setAltitude(altitude => altitude + 100);
    }, 1000) // runs every 1000 ms.

    // React will run the below function when component is removed
    return () => {
      clearInterval(IntervalID); // clearing or resetting al
      console.log("Rocket has landed: " + IntervalID);
    }
  }, []); // if dependency array is empty, then the effect function (the outer function runs only once)




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
