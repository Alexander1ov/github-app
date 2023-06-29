import { ApolloProvider } from "@apollo/client";

import apolloClient from "../graphql/apolloClient";

import AuthWrapper from "./AuthWrapper/AuthWrapper";
import Authorization from "./Authorization/Authorization";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import useUser from "../redux/actions/userActions ";

function App() {
  const { isAuth } = useUser();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthWrapper>
        {!isAuth && <Authorization />}
        <Header />
        <Main />
        <Footer />
      </AuthWrapper>
    </ApolloProvider>
  );
}

export default App;
