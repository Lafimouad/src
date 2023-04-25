import React, { Suspense } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import Loader from "./Components/common/Loader.js";
import { setContext } from '@apollo/client/link/context';


const App = React.lazy(() => import("./App"));

let kee= process.env.REACT_APP_GITHUB_ACCESS_TOKEN 
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization:  `Bearer ${kee}`,
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </ApolloProvider>
);
