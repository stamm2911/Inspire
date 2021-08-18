import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login";
import Profile from "./pages/profile";



export default function App() {
  return (
    <main>
      <ApolloProvider>

        <Home />

        <Profile />
        <Login />
      </ApolloProvider>
    </main>
  );
}