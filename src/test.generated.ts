import * as Types from "./src/gql/graphql";

export type TestQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TestQuery = {
  __typename?: "Root";
  allFilms?: {
    __typename?: "FilmsConnection";
    edges?: Array<{
      __typename?: "FilmsEdge";
      node?: {
        __typename?: "Film";
        title?: string | null;
        created?: string | null;
      } | null;
    } | null> | null;
  } | null;
};
