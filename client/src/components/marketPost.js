import React from "react";

function marketPost() {
  return (
    <article className="market-post-container">
      <img src="https://via.placeholder.com/200x200.png/09f/fff" alt="pic" />
      <section className="market-post-info">
        <div>
          <h1>$4,000</h1>
          <h2>Name</h2>
          <p>Description</p>
          <p>1 pz</p>
        </div>
        <div>
          <button>Add</button>
        </div>
      </section>
    </article>
  );
}

export default marketPost;
