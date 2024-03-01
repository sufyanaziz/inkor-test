import gql from "graphql-tag";
import { GraphQLError } from "graphql";
import { USER_DUMMY_DATA } from "./data";

export const authTypeDefs = gql`
  type Mutation {
    login(email: String!): User
  }
`;

export const authResolvers = {
  Mutation: {
    login: (_: any, { email }: { email: string }) => {
      const findEmailIdx = USER_DUMMY_DATA.findIndex((e) => e.email === email);
      if (findEmailIdx > -1) {
        const date = new Date();
        date.setTime(new Date().getTime() + 60);
        return {
          ...USER_DUMMY_DATA[findEmailIdx],
          expired: date,
        };
      }
      throw new GraphQLError("User is not found", {
        extensions: { code: "USER_IS_NOT_FOUND", argumentName: "email" },
      });
    },
  },
};
