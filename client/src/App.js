import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Marketplace from "./components/marketplace";
import User from "./components/user";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <Marketplace />
      <User />
      <Login />
    </main>
  );
}