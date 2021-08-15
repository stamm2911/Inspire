import React from "react";

function cartItem({productName, image}) {
  return (
    <article className="cartItem-container">
      <img src={image} alt="pic" />
      <section className='cartItem-description'>
        <p>{productName}</p>
        <button>X</button>
      </section>
    </article>
  );
}

export default cartItem;
