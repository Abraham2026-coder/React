"use client";
import "./styles.css";

/*
EXPECTED OUTPUT:
----------------

<div class="container">
  <h2 class="title">Color Picker</h2>
  <p class="subtitle">Click a color to select it</p>
  <div class="color-grid">
    <button class="color-btn" style="background: red; color: white">Red</button>
    <button class="color-btn" style="background: green; color: white">Green</button>
    <button class="color-btn" style="background: blue; color: white">Blue</button>
  </div>
</div>

*/
function BtnColor({ bgColor, color, label }) {
  return (
    <div className="container">
      <h2 className="title">Color Picker</h2>
      <p className="subtitle">Click a color to select it</p>
      <div className="color-grid">
        <button className="color-btn" style={{backgroundcolor:{bgColor} , color:{color}}}>{label}</button>
      </div>
    </div>

  );
}

export default function home() {
  return (
  <div>
    <BtnColor bgColor="red" color="white" label="Red" />
    <BtnColor bgColor="green" color="white" label="Green" />
    <BtnColor bgColor="blue" color="white" label="Blue" />

  </div>);


}