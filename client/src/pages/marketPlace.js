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


  // const products = [
  //   {
  //     _id: 1,
  //     image: "https://via.placeholder.com/250x250.png/09f/fff",
  //     price: 4000,
  //     name: "Book1",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 2,
  //     image: "https://via.placeholder.com/350x450.png/09f/fff",
  //     price: 3000,
  //     name: "Book2",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 3,
  //     image: "https://via.placeholder.com/200x400.png/09f/fff",
  //     price: 2500,
  //     name: "Book3",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  //   {
  //     _id: 4,
  //     image: "https://via.placeholder.com/350x350.png/09f/fff",
  //     price: 1500,
  //     name: "Book4",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 5,
  //     image: "https://via.placeholder.com/550x550.png/09f/fff",
  //     price: 3200,
  //     name: "Book5",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 6,
  //     image: "https://via.placeholder.com/100x100.png/09f/fff",
  //     price: 6500,
  //     name: "Book6",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  //   {
  //     _id: 7,
  //     image: "https://via.placeholder.com/270x270.png/09f/fff",
  //     price: 7800,
  //     name: "Book7",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 8,
  //     image: "https://via.placeholder.com/220x410.png/09f/fff",
  //     price: 8000,
  //     name: "Book8",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 9,
  //     image: "https://via.placeholder.com/210x400.png/09f/fff",
  //     price: 9900,
  //     name: "Book9",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  //   {
  //     _id: 10,
  //     image: "https://via.placeholder.com/350x330.png/09f/fff",
  //     price: 100,
  //     name: "Book10",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 11,
  //     image: "https://via.placeholder.com/550x650.png/09f/fff",
  //     price: 1100,
  //     name: "Book11",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 12,
  //     image: "https://via.placeholder.com/150x250.png/09f/fff",
  //     price: 1200,
  //     name: "Book12",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  //   {
  //     _id: 13,
  //     image: "https://via.placeholder.com/450x450.png/09f/fff",
  //     price: 1300,
  //     name: "Book13",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 14,
  //     image: "https://via.placeholder.com/250x450.png/09f/fff",
  //     price: 1400,
  //     name: "Book14",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 15,
  //     image: "https://via.placeholder.com/150x150.png/09f/fff",
  //     price: 1500,
  //     name: "Book15",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  //   {
  //     _id: 16,
  //     image: "https://via.placeholder.com/450x250.png/09f/fff",
  //     price: 1600,
  //     name: "Book16",
  //     description: "My favorite book1",
  //     availability: true,
  //   },
  //   {
  //     _id: 17,
  //     image: "https://via.placeholder.com/250x350.png/09f/fff",
  //     price: 1700,
  //     name: "Book17",
  //     description: "My favorite book2",
  //     availability: false,
  //   },
  //   {
  //     _id: 18,
  //     image: "https://via.placeholder.com/350x450.png/09f/fff",
  //     price: 1800,
  //     name: "Book18",
  //     description: "My favorite book3",
  //     availability: true,
  //   },
  // ];

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
