import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;

console.log(typeDefs);

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await server.listen({ port: 5000 });
console.log(`Server running at ${url}`);
