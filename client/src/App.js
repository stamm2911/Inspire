import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Marketpalce from "./components/Marketplace";
import User from "./components/User";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Marketpalce />
      <User />
      <Login />
    </main>
  );
}