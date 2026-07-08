import "./styles.css";
/*
Expected Output:

<div class="app">
  <h1>Badge Example</h1>

  <div class="content">
    <div class="badge">
      <span class="badge-count">3</span>
      <button>Messages</button>
    </div>

    <div class="badge">
      <span class="badge-count">!</span>
      <p>System Alert</p>
    </div>
  </div>
</div>
*/

// content = <button>Messages</button> (1st badge)
// content = <p>System Alert</p> (2nd badge)
function Badge({ number, content }) {
    return (
        <div className="badge">
            <span className="badge-count">{number}</span>
            {content}
        </div>
    );
}

export default function App(){
    return(<div className="app">
           <h1>Badge Example</h1>

  <div className="content">
    <Badge number={3} content={<button>Messages</button>} ></Badge>
    <Badge number="!" content={<p>System Alert </p>}></Badge>
  </div>
</div>);
}