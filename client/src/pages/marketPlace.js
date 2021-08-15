import React from "react";
import MarketPost from "../components/marketPlace/marketPost";
import CartItem from "../components/marketPlace/cartItem";
import Subtotal from "../components/marketPlace/subTotal";
import { useQuery } from "@apollo/client";
import { QUERY_MARKETPOSTS } from "../utils/queries";

function Marketpalce() {
  const products = [
    {
      image: "https://via.placeholder.com/250x250.png/09f/fff",
      price: 4000,
      productName: "Book1",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      image: "https://via.placeholder.com/250x450.png/09f/fff",
      price: 3000,
      productName: "Book2",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      image: "https://via.placeholder.com/250x450.png/09f/fff",
      price: 2500,
      productName: "Book3",
      productDesc: "My favorite book3",
      available: true,
    },
    {
      image: "https://via.placeholder.com/250x250.png/09f/fff",
      price: 4000,
      productName: "Book1",
      productDesc: "My favorite book1",
      available: true,
    },
    {
      image: "https://via.placeholder.com/250x450.png/09f/fff",
      price: 3000,
      productName: "Book2",
      productDesc: "My favorite book2",
      available: false,
    },
    {
      image: "https://via.placeholder.com/250x450.png/09f/fff",
      price: 2500,
      productName: "Book3",
      productDesc: "My favorite book3",
      available: true,
    },
  ];

  const { loading, data } = useQuery(QUERY_MARKETPOSTS);
  // const products = data?.products || [];

  return (
    <div className="marketPlace-container">
      <aside className="marketpost-aside-container">
        <Subtotal />
        <CartItem
          productName={"Book1"}
          image={"https://via.placeholder.com/180x180.png/09f/fff"}
        />
        <CartItem
          productName={"Book2"}
          image={"https://via.placeholder.com/280x380.png/09f/fff"}
        />
        <CartItem
          productName={"Book3"}
          image={"https://via.placeholder.com/480x580.png/09f/fff"}
        />
      </aside>
      <div className="marketpost-main-container">
        <MarketPost products={products} />
      </div>
    </div>
  );
}

export default Marketpalce;
