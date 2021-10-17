const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");

const schema = require("./graphql/schema");

async function startApolloServer() {
  const app = express();

  const graphqlServer = new ApolloServer({
    schema,
  });

  await graphqlServer.start();

  graphqlServer.applyMiddleware({ app, path: "/graphql" });

  const httpServer = http.createServer(app);

  return httpServer;
}

module.exports = startApolloServer;
