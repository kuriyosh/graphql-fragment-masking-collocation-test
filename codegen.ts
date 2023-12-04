import { type CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
    "./src/": {
      preset: "near-operation-file",
      documents: ["src/**/*.gql"],
      presetConfig: {
        baseTypesPath: "./src/gql/graphql",
      },
      plugins: ["typescript-operations"],
    },
  },
};

export default config;
