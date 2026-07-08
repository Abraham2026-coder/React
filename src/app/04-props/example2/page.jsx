import "./styles.css";

/*
<div class="container">
  <div class="shopping-item">
    <h2>Wireless Headphones</h2>
    <div class="price">99</div>
    <p>SoundMax</p>
    <p>
      4.5<!-- -->
      ⭐
    </p>
    <p>Electronics</p>
    <span class="tag">In Stock</span>
  </div>
  <div class="shopping-item">
    <h2>Running Shoes</h2>
    <div class="price">79</div>
    <p>FastTrack</p>
    <p>
      4.2<!-- -->
      ⭐
    </p>
    <p>Footwear</p>
    <span class="tag">Limited Stock</span>
  </div>
</div>

*/
/*
Expected Output:
<div class="container">
  <div class="shopping-item">
    <h2>Wireless Headphones</h2>
    <div class="price">$99</div>
    <p>Brand:</p>
    <p>Rating: 4.5 ⭐</p>
    <p>Category: Electronics</p>
    <span class="tag">In Stock</span>
  </div>
  <div class="shopping-item">
    <h2>Running Shoes</h2>
    <div class="price">$79</div>
    <p>Brand: FastTrack</p>
    <p>Rating: 4.2 ⭐</p>
    <p>Category: Footwear</p>
    <span class="tag">Limited Stock</span>
  </div>
</div>
*/

const item1 =
{
  id: 1,
  name: "Wireless Headphones",
  price: 99,
  brand: "SoundMax",
  rating: 4.5,
  category: "Electronics",
  status: "In Stock",
}

const item2 = {
  id: 2,
  name: "Running Shoes",
  price: 79,
  brand: "FastTrack",
  rating: 4.2,
  category: "Footwear",
  status: "Limited Stock",
}

// Components are usually named with nouns
function ShoppingItem({ id, name, price, brand, rating, category, status }) {
  return (

    <div className="shopping-item">
      <h2>{name}</h2>
      <div className="price">${price}</div>
      <p>{brand}</p>
      <p>Rating : {rating} ⭐</p>
      <p>Category: {category}</p>
      <span className="tag">{status}</span>
    </div>

  );
}

export default function ShoppingCart() {
  return (
    <div className="container">
      <ShoppingItem {...item1} />
      <ShoppingItem {...item2} />
    </div>);
}