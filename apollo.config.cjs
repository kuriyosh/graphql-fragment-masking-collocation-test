module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    service: {
      name: "base",
      url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    },
  },
};
