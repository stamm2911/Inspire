import React, { useEffect } from "react";
import MarketPost from "../components/marketPlace/marketPost";
import CartItem from "../components/marketPlace/cartItem";
import Subtotal from "../components/marketPlace/subTotal";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { QUERY_MARKETPOSTS } from "../utils/MarketPlaceQueries";
import { QUERY_CHECKOUT } from "../utils/MarketPlaceQueries";
import { useCartContext } from "../utils/CartContext";
import Auth from "../utils/auth";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Marketplace() {
  const { cart, removeItem } = useCartContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);



  const login = true;
  // const { loading, productData } = useQuery(QUERY_MARKETPOSTS);
  // const products = productData?.products || [];
  // console.log(products);
  // console.log(products2);

  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      productIds.push(item._id);
    });
    console.log(productIds)
    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div className="marketPlace-container">
      <aside className="marketpost-aside-container">
        <Subtotal cart={cart} />
        {/* change the following login for Auth.loggedIn() */}
        {login ? (
          <button
            style={{
              backgroundImage:
                "linear-gradient(to bottom right,  rgb(168, 168, 168),rgb(110, 110, 110))",
              padding: 8,
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={submitCheckout}
          >
            <i className="medium material-icons">payment</i>
            <br></br>Proceed to payment
          </button>
        ) : (
          "Sign in to checkout"
        )}
        <div className="items-overflow">
          <CartItem cart={cart} removeItem={removeItem} />
        </div>
      </aside>
      <div className="marketpost-main-container">
        {/* <MarketPost products={products} /> */}
        <MarketPost />
      </div>
    </div>
  );
}

export default Marketplace;
