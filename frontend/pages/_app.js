import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProvider } from "/context/AppContext";
import "/styles/globals.css";
import Layout from "/components/Layout";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://restaurantapp-jqhf.onrender.com"; // Fallback for development

export const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: {
      errorPolicy: "all",
    },
    query: {
      errorPolicy: "all",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ApolloProvider>
  );
}
