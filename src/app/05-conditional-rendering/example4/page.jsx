//import ShoppingCart from "../example3/page";
//import "./styles";
import "./styles.css";

/*
<div class="shopping-cart"> not repeating
  <h2>Shopping Cart</h2> not repeating

  <div class="cart-items"> not repeating

    <div class="cart-item">   repeating
      <h3>Chocolate Bar</h3>  repeating
      <div class="price">$5</div> repeating
      <div class="in-stock">In stock</div> repeating

      <div class="bulk-stock">+20 Available</div>  <!-- if stock > 20 -->
    </div>

    <div class="cart-item"> repeating
      <h3>Tissue Roll</h3>  repeating 
      <div class="price">$2</div> repeating
      <div class="in-stock">In stock</div> repeating
    </div>

    <div class="cart-item"> repeating
      <h3>Goggles</h3>  repeating
      <div class="price">$150</div> repeating
      <div class="in-stock">In stock</div> <!-- if stock > 0 -->

      <div class="premium-item">High-value item</div> <!--if price > 100-->
    </div>

    <div class="cart-item"> repeating
      <h3>Sticker Pack</h3> repeating
      <div class="price">$15</div> repeating
      <div class="out-of-stock">Out of stock</div> <!-- if stock === 0 -->
    </div>
  </div>
  <div class="total">Total: $157.00</div> no repeating
</div>
*/
function ShoppingItem({ title, price, stock }) {
    return(
         <div className="cart-item">   
            <h3>{title}</h3>  
         <div className="price">${price}</div> 
         {stock > 0 &&  <div className="in-stock">In stock</div>}
         {stock > 20 && <div className="bulk-stock">+20 Available</div>}
         {stock > 100 && <div className="premium-item">High-value item</div>}
         {stock === 0 && <div className="out-of-stock">Out of stock</div>}
    </div>
    );
}

export default function ShoppingCart(){
    return(
             <div className="shopping-cart"> 
                 <h2>Shopping Cart</h2> 

                 <div className="cart-items"> 
                    <ShoppingItem title="Chocolate Bar" price={5} stock={5}/>
                    <ShoppingItem title="Tissue Roll" price={2} stock={30}/>
                    <ShoppingItem title="Goggles" price={150} stock={200}/>
                    <ShoppingItem title="Sticker Pack" price={15} stock={0}/>
             </div>
            
  <div className="total">Total: $157.00</div> 
</div>

    );
}
