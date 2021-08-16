import React from "react";
import MarketPost from "../components/marketPlace/marketPost";
import CartItem from "../components/marketPlace/cartItem";
import Subtotal from "../components/marketPlace/subTotal";
import { useQuery } from "@apollo/client";
import { QUERY_MARKETPOSTS } from "../utils/MarketPlaceQueries";
import { useCartContext } from "../utils/CartContext";

function Marketplace() {
  const { cart, removeItem } = useCartContext();
  const products = [
    {
      _id: 1,
      image: "https://via.placeholder.com/250x250.png/09f/fff",
      price: 4000,
      productName: "Book1",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 2,
      image: "https://via.placeholder.com/350x450.png/09f/fff",
      price: 3000,
      productName: "Book2",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 3,
      image: "https://via.placeholder.com/200x400.png/09f/fff",
      price: 2500,
      productName: "Book3",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      _id: 4,
      image: "https://via.placeholder.com/350x350.png/09f/fff",
      price: 1500,
      productName: "Book4",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 5,
      image: "https://via.placeholder.com/550x550.png/09f/fff",
      price: 3200,
      productName: "Book5",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 6,
      image: "https://via.placeholder.com/100x100.png/09f/fff",
      price: 6500,
      productName: "Book6",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      _id: 7,
      image: "https://via.placeholder.com/270x270.png/09f/fff",
      price: 7800,
      productName: "Book7",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 8,
      image: "https://via.placeholder.com/220x410.png/09f/fff",
      price: 8000,
      productName: "Book8",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 9,
      image: "https://via.placeholder.com/210x400.png/09f/fff",
      price: 9900,
      productName: "Book9",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      _id: 10,
      image: "https://via.placeholder.com/350x330.png/09f/fff",
      price: 100,
      productName: "Book10",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 11,
      image: "https://via.placeholder.com/550x650.png/09f/fff",
      price: 1100,
      productName: "Book11",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 12,
      image: "https://via.placeholder.com/150x250.png/09f/fff",
      price: 1200,
      productName: "Book12",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      _id: 13,
      image: "https://via.placeholder.com/450x450.png/09f/fff",
      price: 1300,
      productName: "Book13",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 14,
      image: "https://via.placeholder.com/250x450.png/09f/fff",
      price: 1400,
      productName: "Book14",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 15,
      image: "https://via.placeholder.com/150x150.png/09f/fff",
      price: 1500,
      productName: "Book15",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      _id: 16,
      image: "https://via.placeholder.com/450x250.png/09f/fff",
      price: 1600,
      productName: "Book16",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      _id: 17,
      image: "https://via.placeholder.com/250x350.png/09f/fff",
      price: 1700,
      productName: "Book17",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      _id: 18,
      image: "https://via.placeholder.com/350x450.png/09f/fff",
      price: 1800,
      productName: "Book18",
      productDesc: "My favorite book3",
      available: true,
    },
  ];

  const { loading, data } = useQuery(QUERY_MARKETPOSTS);
  // const products = data?.products || [];

  return (
    <div className="marketPlace-container">
      <aside className="marketpost-aside-container">
        <Subtotal cart={cart} />
        <button
          style={{
            backgroundImage:
            "linear-gradient(to bottom right,  rgb(168, 168, 168),rgb(110, 110, 110))",
            padding: 8,
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <i className="medium material-icons">payment</i>
          <br></br>Proceed to payment
        </button>
        <div className="items-overflow">
          <CartItem cart={cart} removeItem={removeItem} />
        </div>
      </aside>
      <div className="marketpost-main-container">
        <MarketPost products={products} />
      </div>
    </div>
  );
}

export default Marketplace;
