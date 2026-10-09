"use client";
import { useState } from "react";
import "./styles.css";

export default function ProfileCardBuilder() {
  const [name, setName] = useState('John Doe'); 
  const [tagline, setTagline] = useState('React Learner');
  const [bgColor,setBgcolor] = useState("#000000");
  const [textColor,setTextColor]= useState("#48a3fe");
  const [fontSize,setFontSize]= useState(12);
  const [isBold,setIsBold] = useState(false);
  const [isOnline,setIsOnline] =useState("Online");
  
  return (
    <div className="container">
      <h1 className="title">Profile Card Builder</h1>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="name-input" className="label">Name</label>
          <input
            id="name-input"
            type="text"
            placeholder="Enter a name..."
            className="text-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label htmlFor="tagline-input" className="label">Tagline</label>
          <input
            id="tagline-input"
            type="text"
            placeholder="Enter a tagline..."
            className="text-input"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>

        <div className="control-row">
          <div className="control-group">
            <label htmlFor="card-bg-input" className="label">Card Background</label>
            <div className="color-row">
              <input
                id="card-bg-input"
                type="color"
                className="color-input"
                value={bgColor}
                onChange={(e)=>setBgcolor(e.target.value)}
              />
              <span className="color-hex">{bgColor}</span>
            </div>
          </div>

          <div className="control-group">
            <label htmlFor="text-color-input" className="label">Text Color</label>
            <div className="color-row">
              <input
                id="text-color-input"
                type="color"
                className="color-input"
                value={textColor}
                onChange={(e)=>setTextColor(e.target.value)}
              />
              <span className="color-hex">{textColor}</span>
            </div>
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="font-size-input" className="label">{fontSize}</label>
          <input
            id="font-size-input"
            type="range"
            min={12}
            max={36}
            className="range-input"
            value={fontSize}
            onChange={(e)=>setFontSize(e.target.value)}
          />
        </div>

        <div className="control-row">
          <div className="control-group">
            <span id="bold-label" className="label">Bold Name</span>
            <label className="toggle-switch">
              <input type="checkbox"
                checked={isBold}
                onChange={(e)=> setIsBold(e.target.checked)}
               aria-labelledby="bold-label" />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="control-group">
            <span id="badge-label" className="label">Online Badge</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isOnline === "Online"}
                onChange={(e) => setIsOnline(e.target.checked ? "Online" : "Offline")}
                aria-labelledby="badge-label"
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>
      </div>

      <div className="display-box">
        <div
          className="profile-card"
          style={{ backgroundColor: bgColor, color: textColor, fontSize: `${12}px`, fontWeight: isBold ? "bold" : "normal" }}
        >
          <span
            className="badge"
            style={{ color: textColor, borderColor: textColor , fontSize: `${12}px`, fontWeight: isBold ? "bold" : "normal" }}
          >
            ● {isOnline}
          </span>
          <div
            className="avatar"
            style={{ borderColor: textColor, color: textColor, fontSize: `${16}px`, fontWeight: isBold ? "bold" : "normal" }}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <p
            className="card-name"
            style={{ fontSize: `${fontSize}px`, fontWeight: 700, color: textColor ,fontSize: `${fontSize}px`, fontWeight: isBold ? "bold" : "normal"}}
          >
            {name}
          </p>
          <p className="card-tagline" style={{ color: textColor ,fontSize: `${fontSize}px`, fontWeight: isBold ? "bold" : "normal"}}>
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
