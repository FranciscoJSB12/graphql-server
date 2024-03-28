import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    schema {
        query: Query
    }

    type Query {
        greeting: String
    }    
`;

const resolvers = {
  Query: {
    greeting: () => "Hello world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => console.log("Graphql server running on port " + url))
  .catch((err) => console.error(err));
