"use client";

import { useState } from "react";

export default function TwoWayBinding() {
    const [name, setName] = useState("React");
    return (
        <input
            type="text"
            //Instruction to the browser
            value={name}
            // e.target.value is the user-typed value. Browser informs us when the user types something
            onChange={e => setName(e.target.value)} />)
}

/*
Painted: React

1. User types Backspace
2. Browser will inform the onChange callback. e.target.value = Reac
3. setName(e.target.value) (this will update React state)
4. Component will re-render
5. In the re-render, value="Reac"
6. Instruct the browser to paint Reac
*/

// setName(e.target.value) will get the HTML state and sync it with React state
// value={name} will get the React state and sync it with HTML state