import React from "react";

function cartItem() {
  return (
    <article className="cartItem-container">
      <img src="https://via.placeholder.com/180x180.png/09f/fff" alt="pic" />
      <section className='cartItem-description'>
        <p>PRODUCT_NAME</p>
        <button>X</button>
      </section>
    </article>
  );
}

export default cartItem;
