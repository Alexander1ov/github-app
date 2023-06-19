import { ApolloProvider } from "@apollo/client";

import apolloClient from "../graphql/apolloClient";

import Authorization from "./Authorization/Authorization";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      {!sessionStorage.getItem("token") && <Authorization />}
      <Header />
      <Main />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
