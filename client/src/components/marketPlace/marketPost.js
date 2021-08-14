import React from "react";

function marketPost() {
  return (
    <article className="market-post-container">
      <img src="https://via.placeholder.com/250x250.png/09f/fff" alt="pic" />
      <section className="market-post-info">
        <div>
          <p>$4,000</p>
          <p>PRODUCT_NAME</p>
          <p>PRODUCT_DESCRIPTION</p>
          <p>QTY pz</p>
        </div>
        <div>
          <button>Add</button>
        </div>
      </section>
    </article>
  );
}

export default marketPost;
