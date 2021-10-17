const { join } = require("path");
const { print } = require("graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const types = loadFilesSync(join(__dirname, "./typedefs/"), {
  extensions: ["graphql"],
  recursive: true,
});

const resolvers = loadFilesSync(join(__dirname, "./resolvers/"), {
  extensions: ["js"],
  recursive: true,
});

const mergedTypes = mergeTypeDefs(types);

const schema = makeExecutableSchema({
  typeDefs: print(mergedTypes),
  resolvers,
});

module.exports = schema;
