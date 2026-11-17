'use client';

import { useEffect, useState } from 'react';

// Questions — answer them in a comment before you fix the code:
//   1. What do you see in the console after you switch to Stats?
//   2. What happens after you switch back and forth 3 times?
//   3. Why does this happen?

/*

function printUpperCase(payload){
    const textTouppercase = payload.payload.message;
    console.log("Received: ", textTouppercase.toLocaleUpperCase());
}

messagesChannel.on("broadcast", {event:"uppercase"}, printUpperCase);

messagesChannel.subscribe((status, error) => {
    if (error) {
        console.log(error);
        process.exit(0);
    }
    if (status === "SUBSCRIBED") {
        console.log("Listening on channel 'messages'... 👂");
    }
})

supabase.removeChannel(messagesChannel);
*/
export default function Breathing() {
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Long running processes
      console.log(`Interval ${intervalId} switching phase`);
      setPhase((p) => (p === 'in' ? 'out' : 'in'));
    }, 3000);
    return () => {
      console.log(`Interval ${intervalId} started`);
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="panel">
      <p className="panel-label">Breathing</p>
      <p className="seconds">
        {phase === 'in' ? 'Breathe in' : 'Breathe out'}
      </p>
    </div>
  );
}
