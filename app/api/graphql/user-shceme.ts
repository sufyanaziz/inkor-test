import gql from "graphql-tag";
import { GraphQLError } from "graphql";
import { USER_DUMMY_DATA } from "./data";

export const userTypeDefs = gql`
  type Query {
    getUser(tokenId: String!, email: String!): User
  }
`;

export const userResolvers = {
  Query: {
    getUser: (
      _: any,
      { tokenId, email }: { tokenId: string; email: string }
    ) => {
      const findUserIdx = USER_DUMMY_DATA.findIndex(
        (x) => x.email === email && tokenId === x.tokenId
      );
      if (findUserIdx > -1) {
        return USER_DUMMY_DATA[findUserIdx];
      }
      throw new GraphQLError("User is not found", {
        extensions: {
          code: "USER_IS_NOT_FOUND",
          argumentName: "tokenId & email",
        },
      });
    },
  },
};
