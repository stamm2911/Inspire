import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Navbar from "./components/navbar";
import MarketPlace from "./pages/marketPlace";

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
          <Route exact path="/marketplace" component={MarketPlace} />
        </main>
      </Router>
    </ApolloProvider>
  );
}
