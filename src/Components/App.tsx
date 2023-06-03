import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import apolloClient from "../graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Header/>
      <Main/>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
