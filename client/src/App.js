// import { ApolloProvider, ApolloClient } from "@apollo/react-hooks";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";

import Navbar from "./components/navbar";
import MarketPlace from "./pages/marketPlace";
import Success from "./pages/success";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
// import SinglePost from './pages/SinglePost';

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/main" component={Home} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/posts/:postId" component={SinglePost} /> */}
            {/* <Route exact path='/success' component={Success} /> */}
            {/* <Route exact path='/orderHistory' component={OrderHistory} />
              <Route exact path='/products/:id' component={Detail} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Login} />
            {/* <Route component={NoMatch} /> */}
            <CartProvider>
              <Route exact path="/marketplace" component={MarketPlace} />
              <Route exact path="/success" component={Success} />
            </CartProvider>
          </Switch>
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
