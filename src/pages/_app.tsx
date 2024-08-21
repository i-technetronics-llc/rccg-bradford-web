import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
const URI = process.env.NEXT_PUBLIC_HYGRAPH;
export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: URI as string,
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
