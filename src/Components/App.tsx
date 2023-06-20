import { ApolloProvider } from "@apollo/client";

import apolloClient from "../graphql/apolloClient";

import Authorization from "./Authorization/Authorization";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import useUser from "../redux/actions/userActions ";

function App() {
  const { isAuth  } = useUser();

  return (
    <ApolloProvider client={apolloClient}>
      {!isAuth && <Authorization />}
      <Header />
      <Main />
      <Footer />
    </ApolloProvider>
  );
}

export default App;
