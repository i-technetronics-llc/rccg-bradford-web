import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://eu-west-2.cdn.hygraph.com/content/clzd858tj01x607w6t3h0jmdz/master",
    cache: new InMemoryCache(),
  });

  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}
