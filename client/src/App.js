import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import MarketPlace from "./pages/marketPlace";

export default function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Route exact path="/marketplace" component={MarketPlace} />
      </main>
    </Router>
  );
}
