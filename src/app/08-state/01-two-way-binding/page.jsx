"use client";

import { useState } from "react";

export default function TwoWayBinding() {
    const [name, setName] = useState("React");
    return (
        <input
            type="text"
            value={name}
            // e.target.value is the user-typed value
            onChange={e => setName(e.target.value)} />)
}

// setName(e.target.value) will get the HTML state and sync it with React state
// value={name} will get the React state and sync it with HTML state