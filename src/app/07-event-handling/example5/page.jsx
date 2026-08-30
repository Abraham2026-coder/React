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

ACTUAL OUTPUT:
----------------
 <div class="container">
    <h2 class="title">Color Picker</h2>
    <p class="subtitle">Click a color to select it</p>
    <div class="color-grid">
      <button class="color-btn" style="background:red;color:white">Red</button>
      <button class="color-btn" style="background:green;color:white">Green</button>
      <button class="color-btn" style="background:blue;color:white">Blue</button>
    </div>
</div>
*/
function BtnColor({ bgColor, color, children }) {
  return (
    <button onClick={() => window.alert(`You have clicked ${bgColor}`)} className="color-btn" style={{ background: bgColor, color: color }}>{children}</button>
  );
}
export default function home() {
  return (


    <div className="container">
      <h2 className="title">Color Picker</h2>
      <p className="subtitle">Click a color to select it</p>
      <div className="color-grid">
        <BtnColor bgColor="red" color="white">Red</BtnColor>
        <BtnColor bgColor="green" color="white" children="Green" />
        <BtnColor bgColor="blue" color="white" children="Blue" />
      </div>

    </div>);


}