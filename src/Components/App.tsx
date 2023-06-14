import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import apolloClient from "../graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Authorization from "./Authorization/Authorization";

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
