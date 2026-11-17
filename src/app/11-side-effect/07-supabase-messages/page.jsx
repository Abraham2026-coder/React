'use client';
import { useEffect, useState } from 'react';

const supabaseJs = require("@supabase/supabase-js");
const supabaseUrl = "https://hofafzkolyngkqeqfrxg.supabase.co";
const supabasePubKey = "sb_publishable_r0oNUsKsgzqbtca0RBcWTQ_ssgc9cVR";
const supabase = supabaseJs.createClient(supabaseUrl, supabasePubKey);


export default function ListeningMessages() {
    const [messages, setMessages] = useState(["HELLO", "world"]);
    
    useEffect(() => {
        const messagesChannel = supabase.channel("messages");

        function printUpperCase(payload) {
            const textTouppercase = payload.payload.message;
            const newMessage = textTouppercase.toLocaleUpperCase();
            setMessages(prev => [...prev, newMessage]);
        }
        
        function printLowerCase(payload) {
            const textToLowercase = payload.payload.message;
            const newMessage =  textToLowercase.toLocaleLowerCase();
            setMessages(prev => [...prev, newMessage]);
        }

        // Event is the same as message name in the Supabase UI
        messagesChannel.on("broadcast", { event: "uppercase" }, printUpperCase);
        messagesChannel.on("broadcast", { event: "lowercase" }, printLowerCase);

        messagesChannel.subscribe((status, error) => {
            if (error) {
                console.log(error);
            }
            if (status === "SUBSCRIBED") {
                console.log("Listening on channel 'messages'... 👂");
            }
        })

        return () => {
            supabase.removeChannel(messagesChannel);
        }
    }, []);

    return (
        <div>
            <ul>
                {messages.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

/*

<ul>
    <li>Hello</li>
    <li>World</li>
</ul>
*/
