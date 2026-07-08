import "./styles.css"
/*
<div class="container">
  <div class="shopping-item">
    <h2>Wireless Headphones</h2>
    <div class="price">$99</div>
    <p>Brand:</p>
    <p>Rating: 4.5 ⭐</p>
    <p>Category: Electronics</p>
    <span class="tag">In Stock</span>
  </div>
</div>

Step 1:
<div class="container">
  <div class="shopping-item">
    <h2>Wireless Headphones</h2>
  </div>
</div>

*/

const headphone = {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    brand: "SoundMax",
    rating: 4.5,
    category: "Electronics",
    status: "In Stock",
};
//{Object.keys(headphone)[2] + ":"}
export default function MyHeadphones(){
    return (
        <div className="container">
            <div className="shopping-item">
                <h2>{headphone.name}</h2>
                <div className="price"> {"$" + headphone.price}</div>
                <p><strong>{Object.keys(headphone)[3]}</strong></p>
                 <p><strong>{"Rating : "}</strong><strong>{4.5 + " ⭐"}</strong></p>
                 <p><strong>{Object.keys(headphone)[5] + ":"}</strong><strong>{headphone.category}</strong></p>
                  <span className="tag"><strong>{headphone.status}</strong></span>


            </div>
        </div>

    );
}