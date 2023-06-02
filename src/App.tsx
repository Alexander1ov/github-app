import Repositories from "./Components/Repositories/Repositories";
import apolloClient from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Repositories/>
    </ApolloProvider>
  );
}

export default App;
