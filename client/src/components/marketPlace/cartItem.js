import React from "react";
import { v4 as uuidv4 } from "uuid";

function cartItem({ cart, removeItem }) {
  console.log(cart);
  if (cart.length < 1) {
    return <h4>No items</h4>;
  }
 
  return (
    <>
      {cart &&
        cart.map((item) => (
          <article key={uuidv4()} className="cartItem-container">
            <img src={item.image} alt="pic" />
            <section className="cartItem-description">
              <p>{item.productName}</p>
              <button onClick={() => removeItem(item)}>X</button>
            </section>
          </article>
        ))}
    </>
  );
}

export default cartItem;
