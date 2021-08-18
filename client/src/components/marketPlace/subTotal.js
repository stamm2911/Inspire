import React from "react";

function Subtotal({ cart }) {
  const cartPrices = cart.map((item) => item.price);
  return (
    <article className="subTotal-container">
      <p>
        Subtotal: $
        {cart.length > 0 ? cartPrices.reduce((total, num) => total + num) : 0}
      </p>
      <p>
        <i className="small material-icons">shopping_cart</i>
        {cart.length}
      </p>
    </article>
  );
}

export default Subtotal;
