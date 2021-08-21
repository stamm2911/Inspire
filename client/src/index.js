import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import App from './App';
// import './login.css'
import 'materialize-css/dist/css/materialize.min.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});
console.log(httpLink);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

console.log(authLink);

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

console.log(client)

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);


