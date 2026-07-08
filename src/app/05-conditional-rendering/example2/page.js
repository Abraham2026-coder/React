
import "./styles.css";

/*
<div class="todo-list">
  <div class="todo-item completed">
    <h2>Buy groceries</h2>
  </div>
  <div class="todo-item">
    <h2>Walk the dog</h2>
  </div>
  <div class="todo-item completed">
    <h2>Pay bills</h2>
  </div>
</div>
*/

// Reference: let statusLabel = status === "online" ? "Online" : "Offline";

function TodoItem({ children, status }) {
    let cssStatusClass = status === "completed" ? "completed":"";
    return (
        <div className ={`todo-item ${cssStatusClass}`}>
            <h2>{children}</h2>
        </div>
    );


}

export default function TodoList() {
    return (

        <div className="todo-list">
            <TodoItem status="completed">Buy groceries</TodoItem>
            <TodoItem >Walk the dog</TodoItem>
            <TodoItem status="completed" >Pay bills</TodoItem>
        </div>

    );
}