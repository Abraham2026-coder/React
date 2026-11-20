/*

ASSIGNMENT: Notifications listener

Build a component that listens to a Supabase channel called "notifications" and
 shows every notification in a list.

Start with two notifications in state: "✅ Server started" and "❌ Login failed".
Subscribe to the "notifications" channel inside a useEffect.
Listen to two broadcast events:
"success" → add the message to the list with "✅ " in front of it
"error" → add the message to the list with "❌ " in front of it
Log "Listening on channel 'notifications'... 👂" when subscribed.
Don't forget the cleanup: remove the channel when the component unmounts.
Test it from the Supabase UI: Realtime → Broadcast, channel "notifications", event "success" or "error", payload: { "message": "Payment received" }

Expected:

<ul> <li>✅ Server started</li> <li>❌ Login failed</li> <li>✅ Payment received</li> </ul> */

'use client';
import { use, useEffect, useState } from 'react';
// importing supabase libery
const supabaseJs = require("@supabase/supabase-js");
// address to supabase project
const supabaseUrl = "https://hofafzkolyngkqeqfrxg.supabase.co";
// public key
const supabasePubKey = "sb_publishable_r0oNUsKsgzqbtca0RBcWTQ_ssgc9cVR";
// connection
const supabase = supabaseJs.createClient(supabaseUrl, supabasePubKey);
// creating react component
export default function ListenToNotification(){
    // state for notice
    const [notice , setNotice] = useState([" "]);
    
    
    useEffect(()=>{
        //building a chanel notification
    const notificationChannel = supabase.channel("notification");

    function printSuccess(payload){
        payload.payload.message = "✅ Server started"
        const successMessage = payload.payload.message;
        setNotice(prev => [...prev, successMessage]);
    }
    function printError(payload){
        payload.payload.message = "❌ Login failed";
        const errorMessage = payload.payload.message;
        setNotice(prev =>[...prev,errorMessage]);
    }
    // lysing to event from supabase
    notificationChannel.on("broadcast", { event: "success" },printSuccess);
    notificationChannel.on("broadcast", { event: "error" },printError);

     notificationChannel.subscribe((status, error) => {
            if (error) {
                console.log(error);
            }
            if (status === "SUBSCRIBED") {
                console.log("Listening on channel 'messages'... 👂");
            }
        })

        return () => {
            supabase.removeChannel(notificationChannel);
        }
    },[]);
    // generating UI
    return (
        <div>
            <ul>
                {notice.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
    
}