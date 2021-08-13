import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/main";
import MarketPlace from "./pages/marketPlace";
import Profile from "./pages/profile";
import SignIn from "./pages/signIn";

import Navbar from "./components/navbar";

export default function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Route exact path="/main" component={Main} />
        <Route exact path="/marketplace" component={MarketPlace} />
      </main>
    </Router>
  );
}
