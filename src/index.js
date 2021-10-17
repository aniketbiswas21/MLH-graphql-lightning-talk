const app = require("./app");

const server = app();

server.then((app) => {
  app.listen(4000, () => {
    console.log("GraphQL Server running on http://localhost:4000/graphql");
  });
});
