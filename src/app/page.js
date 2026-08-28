import Image from "next/image";
import styles from "./page.module.css";

// http://localhost:3000/
export default function Home() {
  return (
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

  );
}


/*
NextJS will look for 04-props/example1 path
Inside the path, it will look for page file
The default export from the file will be used to render the output
*/