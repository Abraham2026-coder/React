import "./styles.css";

/*
<div>
  <h2>Grocery List</h2>
  <ul>
    <li>🍎 Apples</li>
    <li>🍌 Bananas</li>
    <li>🥕 Carrots</li>
    <li>🍞 Bread</li>
    <li>🧀 Cheese</li>
  </ul>
</div>
*/
function Fruit({ name }) {
    return (
        <li>{name}</li>
    )
}

// ⌥ ⇧ ↓ (Option + Shift + Down Arrow) → Duplicate below

const items = [
    "🍎 Apples",
    "🍌 Bananas",
    "🥕 Carrots",
    "🍞 Bread",
    "🧀 Cheese",
];

export default function List() {
    return (
        <div>
            <h2>Grocery List</h2>
            <ul>
                {items.map((item, index) => <Fruit key={index} name={item} />)}
            </ul>
        </div>
    )
}