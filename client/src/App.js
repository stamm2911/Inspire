import React from "react";
import Home from "./components/home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Marketpalce from "./components/Marketpalce";
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