import "./styles.css";

/*
<div>
 <div class="shopping-cart"> // not repeating 

   <h2>Shopping Cart</h2>  // not repeating 

   <div class="cart-items">
    <div class="cart-item">
        <h3>Chocolate Bar</h3>
        <div class="price">$5.00</div>
        <div>+20 Available</div>
    </div>

    <div class="cart-item">
      <h3>Tissue Roll</h3>
      <div class="price">$2.00</div>
    </div>

    <div class="cart-item">
      <h3>Goggles</h3>
      <div class="price">$15.00</div>
    </div>

  </div>
  <div class="total">Total: $22.00</div> // not repeating 
</div>
*/

/*
Logs:
priceChocolate: number
priceTissue: undefined
priceGoggles: undefined

priceChocolate: undefined
priceTissue: number
priceGoggles: undefined

priceChocolate: undefined
priceTissue: undefined
priceGoggles: number
*/

function ShoppingItem({ title, price, plus20 }) {
  console.log("priceChocolate: " + typeof priceChocolate);
  console.log("priceTissue: " + typeof priceTissue);
  console.log("priceGoggles: " + typeof priceGoggles);

  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <div className="price">${price}</div>
      {plus20 && <div className="stock-status">+20 Available</div>}
      {/* Alternative */}
      {/* {plus20 === true ? <div className="stock-status">+20 Available</div> : ""} */}
    </div>
  );

}

// Optional
function Total({ sum }) {
  return <div className="total">Total:${sum}</div>
}

export default function ShoppingCart() {

  return (
    <div>
      <div className="shopping-cart">

        <h2>Shopping Cart</h2>

        <div className="cart-items">
          <ShoppingItem title="Chocolate Bar" price={5.00} plus20={true}></ShoppingItem>
          <ShoppingItem title="Tissue Roll" price={2.00} plus20={false}></ShoppingItem>
          <ShoppingItem title="Goggles" price={15.00} plus20={false}></ShoppingItem>
          <ShoppingItem title="German Keyboard" price={10.00}></ShoppingItem>
          {/* {React.createElement(ShoppingItem, { title: "Chocolate Bar", priceChocolate: 5.00, plus20: "+20 Available" })}
          {React.createElement(ShoppingItem, { title: "Tissue Roll", priceTissue: 2.00 })}
          {React.createElement(ShoppingItem, { title: "Goggles", priceGoggles: 15.00 })} */}

        </div>
        <div className="total">Total: $22.00</div>
      </div>
    </div>
  );
}