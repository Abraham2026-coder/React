/*
<nav class="navbar">
  <a class="navbar-brand" href="/">MyApp</a>
  <ul class="nav-list">
    <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
    <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
  </ul>
</nav>
*/

const { default: _default } = require("next/dist/client/router");
class Person {

}
export default function MyApp() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">MyApp</a>
      <ul className="nav-list">
        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
