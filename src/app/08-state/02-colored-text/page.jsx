"use client";
import { useState } from "react";
import "./styles.css";

export default function ColoredText() {
    const [text, setText] = useState("Hello");
    const [color,setColor] = useState("#f00030");
    return (
        <div className="container">
            <h1 className="title">Color Text Demo</h1>
            <div className="controls">
                <div className="control-group">
                    <label htmlFor="color-input" className="label">Text Color</label>
                    <div className="color-row">
                        <input
                            id="color-input"
                            className="color-input"
                            type="color"
                            value={color}
                            onChange={e => setColor(e.target.value)}
                        /><span className="color-hex" >{color}</span>
                    </div>
                </div>
                <div className="control-group">
                    <label htmlFor="text-input" className="label">Your Text</label>
                    <input
                        id="text-input"
                        placeholder="Type something..."
                        className="text-input"
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
            </div>
            <div className="display-box">
                {/* text is React state that we can read from anywhere in the app.
                 We write it from only one place to keep it clean. */}
                <p className="display-text" style={{ color: color }}>{text}</p>
            </div>
        </div>
    )
}