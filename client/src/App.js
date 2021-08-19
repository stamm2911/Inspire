// import { ApolloProvider, ApolloClient } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
          {/* <Provider store={store}> */}
            {/* <Nav /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              {/* <Route exact path='/success' component={Success} /> */}
              {/* <Route exact path='/orderHistory' component={OrderHistory} />
              <Route exact path='/products/:id' component={Detail} /> */}
              <Route exact path='/profile' component={Profile} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          {/* </Provider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;