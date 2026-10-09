import Image from "next/image";
import styles from "./page.module.css";

// http://localhost:3000/
export default function Home() {
  return (
    <div>

      <section>
        <h1>Games</h1>
        <ul>
          <li>
            <a href="09-tic-tac-toe">Tic Tac Toe</a>
          </li>
        </ul>
        <h1>Foundations</h1>
        <ul>
          {/* href must match one of the file paths under app directory (App router) */}
          <li>
            <a href="02-component">02-component </a>
          </li>
          <li>
            <a href="03-expression-slots/example1">Expression Slots Example 1</a>
          </li>
          <li>
            <a href="04-props/example1">Props Example 1</a>
          </li>
          <li>
            <a href="04-props/example2">Props Example 2</a>
          </li>
          <li>
            <a href="04-props/example3">Props Example 3</a>
          </li>
          <li>
            <a href="04-props/example4">Props Example 4</a>
          </li>
          <li>
            <a href="04-props/example5">Props Example 5 - children prop</a>
          </li>
          <li>
            <a href="04-props/example6">Props Example 6 - children prop</a>
          </li>
          <li>
            <a href="04-props/summery-props">summery-props</a>
          </li>
          <li>
            <a href="04-props/summery-props2">summery-props2</a>
          </li>
          <li>
            <a href="05-conditional-rendering/example1">Conditional Rendering 1 - Friends List</a>
          </li>
          <li>
            <a href="05-conditional-rendering/example2">Conditional Rendering 2 - Todo List</a>
          </li>
          <li>
            <a href="05-conditional-rendering/example3">Conditional Rendering 3 - Shopping Cart </a>
          </li>
          <li>
            <a href="05-conditional-rendering/example4">Conditional Rendering 4 - Shopping Cart </a>
          </li>
          <li>
            <a href="05-conditional-rendering/example5">Conditional Rendering 5 - BuyTickets </a>
          </li>
          <li>
            <a href="05-conditional-rendering/example6">Conditional Rendering 6 - Credit Card Users</a>
          </li>
          <li>
            <a href="05-conditional-rendering/example7">Conditional Rendering 7 - Credit Card Users-2</a>
          </li>
          <li>
            <a href="06-rendering-lists/01-just-strings">Rendering Lists - List of strings</a>
          </li>
          <li>
            <a href="06-rendering-lists/02-objects">Rendering Lists - Objects 1</a>
          </li>
          <li>
            <a href="06-rendering-lists/03-objects-2">Rendering Lists - Objects 2</a>
          </li>
          <li>
            <a href="06-rendering-lists/04-filter-objects">Rendering Lists - Friends</a>
          </li>
          <li>
            <a href="06-rendering-lists/05-nested-objects">Rendering Lists - Courses</a>
          </li>
          <li>
            <a href="07-event-handling/example1">Event Handling - Example 1</a>
          </li>
          <li>
            <a href="07-event-handling/example2">Event Handling - Example 2 (No child component) </a>
          </li>
          < li>
            <a href="07-event-handling/example3">Event Handling - Example 3 (string duplication removed with a child component)</a>
          </li>
          < li>
            <a href="07-event-handling/example4">Event Handling - Example 4 (function duplication removed)</a>
          </li>
          < li>
            <a href="07-event-handling/example5">Event Handling - Example 5 (color )</a>
          </li>
        </ul>
      </section>
      <section>
        <h1>State</h1>
        <ul>
          < li>
            <a href="08-state/01-two-way-binding">Two way binding</a>
          </li>
          < li>
            <a href="08-state/01-2-way-binding-ex1">Two way binding-colorBox</a>
          </li>
          < li>
            <a href="08-state/02-colored-text">Colored Text</a>
          </li>
          < li>
            <a href="08-state/03-font-demo">Font Demo</a>
          </li>
          < li>
            <a href="08-state/04-addRemoveBtn">addRemoveBtn</a>
          </li>
          < li>
            <a href="08-state/04b-addRemoveBtn">addRemoveBtn-v2</a>
          </li>

          < li>
            <a href="08-state/example1">State - Example 1 (color box)</a>
          </li>
          < li>
            <a href="08-state/05-hello">State - 05-hello </a>
          </li>
          < li>
            <a href="08-state/06-hello">State - 06-hello </a>
          </li>
          < li>
            <a href="08-state/06b-hello">State - 06b-hello </a>
          </li>
          < li>
            <a href="08-state/06c-hello">State - 06c-hello </a>
          </li>
          < li>
            <a href="08-state/06d-hello">State - 06d-hello </a>
          </li>
          < li>
            <a href="08-state/08-boxes-and-circles">State - Boxes and Circles</a>
          </li>
          < li>
            <a href="08-state/09-object">State - Object</a>
          </li>
          < li>
            <a href="08-state/09-object2">State - object2-color-box</a>
          </li>
          < li>
            <a href="08-state/09-object3">State - object3-color-box</a>
          </li>
          < li>
            <a href="08-state/09-object4">State - object4-color-box</a>
          </li>
          < li>
            <a href="08-state/09-object5">State - object5-color-box</a>
          </li>
          < li>
            <a href="08-state/10-objects-02">State - Card-Badge color-box</a>
          </li>

        </ul>

      </section>
    </div>


  );
}


/*
NextJS will look for 04-props/example1 path
Inside the path, it will look for page file
The default export from the file will be used to render the output
*/