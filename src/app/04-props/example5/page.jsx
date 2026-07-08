import "./styles.css";

/*
Expected Output:

<div class="app">

  <h1>Tooltip Example</h1>

  <div class="toolbar">

    <div class="tooltip">
      <button>💾</button>
      <span class="tooltip-text">Save changes</span>
    </div>

    <div class="tooltip">
      <button>🗑️</button>
      <span class="tooltip-text">Delete item</span>
    </div>

    <div class="tooltip">
      <button>✏️</button>
      <span class="tooltip-text">Edit item</span>
    </div>

  </div>
</div>

*/

// child component
// children prop automatically gets the values between the component opening and closing tags
function ToolButton({ image, children }) {
  return (
    <div className="tooltip">
      <button>{image}</button>
      <span className="tooltip-text">{children}</span>
    </div>
  );
}
// parent component
export default function App() {
  return (
    <div className='app'>
      <h1>Tooltip Example</h1>
      <div className="toolbar">

        <ToolButton image="💾">Save changes</ToolButton>
        <ToolButton image="🗑">Save changes</ToolButton>
        <ToolButton image="✏️">Edit item</ToolButton>

      </div>


    </div>
  );

}
/*
<button>Click Me</button>
*/