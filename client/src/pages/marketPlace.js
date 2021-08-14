import React from "react";
import MarketPost from "../components/marketPlace/marketPost";
import CartItem from "../components/marketPlace/cartItem";
import Subtotal from "../components/marketPlace/totalBill";

function Marketpalce() {
  return (
    <div className="marketPlace-container">
      <aside className="marketpost-aside-container">
        <Subtotal />
        <CartItem />
        <CartItem />
        <CartItem />
      </aside>
      <div className="marketpost-main-container">
        <MarketPost />
        <MarketPost />
        <MarketPost />
        <MarketPost />
        <MarketPost />
        <MarketPost />
        <MarketPost />
      </div>
    </div>
  );
}

export default Marketpalce;
