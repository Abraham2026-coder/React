"use client";
import { useState } from "react";
import "./styles.css"

export default function UpperLowerCase(){
    const [text, setText] = useState("Hello, world!");
    const [fontSize,setFontSize] =useState(24);
    const [isBold,setIsBold] = useState(false);
    const [isOff,setIsOff] =useState("Off");
    return(
        <div className="container">
  <h1 className="title">Font Style Demo</h1>
  <div className="controls">
    <div className="control-group">
      <label htmlFor="text-input" className="label">Your Text</label>
      <input
        id="text-input"
        placeholder="Type something..."
        className="text-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
    <div className="control-group">
      <label htmlFor="size-input" className="label">{fontSize}</label>
      <input
        id="size-input"
        min="12"
        max="48"
        className="range-input"
        type="range"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        
      />
    </div>
    <div className="control-group">
      <span className="label">{isOff}</span>
      <button className="toggle-btn" 
      onClick={()=> isBold ? (setIsBold(false),setIsOff("Off")) : (setIsBold(true),setIsOff("On"))}
      >{isOff}</button>
    </div>
  </div>
  <div className="display-box">
    <p className="display-text" style={{ fontSize: `${fontSize}px`, fontWeight: isBold ? "bold" : "normal" }}>
      {text}
    </p>
  </div>
</div>

    )
}