import React from "react";
import { useCartContext } from "../../utils/CartContext";
import { v4 as uuidv4 } from "uuid";

function MarketPost({ products }) {
  const { addItem } = useCartContext();

  if (!products.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <>
      {products &&
        products.map((product) => (
          <article
            key={uuidv4()}
            style={{ opacity: product.available ? 1 : 0.5 }}
            className="market-post-container"
          >
            <img src={product.image} alt="pic" />
            <section className="market-post-info">
              <div>
                <p style={{ fontSize: 25, margin: 2, fontWeight: "bold" }}>
                  ${product.price}
                </p>
                <p style={{ fontSize: 15, margin: 2, fontWeight: "bold" }}>
                  {product.productName}
                </p>
                <p style={{ fontSize: 15, margin: 2 }}>{product.productDesc}</p>
                <p style={{ fontSize: 15, margin: 2, fontStyle: "italic" }}>
                  {product.available ? "Available" : "Not available"}
                </p>
              </div>
              <div>
                {product.available ? (
                  <button
                    style={{
                      background: "transparent",
                      color: "rgb(233, 233, 233)",
                      cursor: "pointer",
                    }}
                    onClick={() => addItem(product)}
                  >
                    <i class="small material-icons">add_box</i>
                  </button>
                ) : (
                  <button disabled
                    style={{
                      background: "transparent",
                    }}
                    onClick={() => addItem(product)}
                  >
                    <i class="small material-icons">add_box</i>
                  </button>
                )}
              </div>
            </section>
          </article>
        ))}
    </>
  );
}

export default MarketPost;
