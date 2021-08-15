import React from "react";
import { v4 as uuidv4 } from 'uuid';

function marketPost({ products }) {
  if (!products.length) {
    return <h3>No Posts Yet</h3>;
  }
  return (
    <>
      {products && products.map((product) => (
        <article key={uuidv4()} className="market-post-container">
          <img src={product.image} alt="pic" />
          <section className="market-post-info">
            <div>
              <p>${product.price}</p>
              <p>{product.productName}</p>
              <p>{product.productDesc}</p>
              <p>{product.available ? "Available" : "Not available"}</p>
            </div>
            <div>
              <button>Add</button>
            </div>
          </section>
        </article>
      ))}
    </>
  );
}

export default marketPost;
