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
function Toolbar({ image, text }) {
  return (
    <div className="tooltip">
      <button>{image}</button>
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
// parent component
export default function App() {
  return (
    <div className='app'>
      <h1>Tooltip Example</h1>
      <div className="toolbar">
        <Toolbar image="💾" text="Save changes"></Toolbar>
        <Toolbar image="🗑" text="Delete item"></Toolbar>
        <Toolbar image="✏️" text="Edit item"></Toolbar>

      </div>


    </div>
  );

}