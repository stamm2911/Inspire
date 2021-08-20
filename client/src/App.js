import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CartProvider } from "./utils/CartContext";

import Navbar from "./components/navbar";
import MarketPlace from "./pages/marketPlace";
import Success from "./pages/success";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Navbar />
          <CartProvider>
            <Route exact path="/marketplace" component={MarketPlace} />
            <Route exact path="/success" component={Success} />
          </CartProvider>
        </main>
      </Router>
    </ApolloProvider>
  );
}
