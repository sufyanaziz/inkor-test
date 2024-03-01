import gql from "graphql-tag";
import { GraphQLError } from "graphql";
import { USER_DUMMY_DATA } from "./data";

export const authTypeDefs = gql`
  type Auth {
    user: User
    expired: Float
  }
  type Mutation {
    login(email: String!): Auth
  }
`;

export const authResolvers = {
  Mutation: {
    login: (_: any, { email }: { email: string }) => {
      const findEmailIdx = USER_DUMMY_DATA.findIndex((e) => e.email === email);
      if (findEmailIdx > -1) {
        const date = new Date();
        date.setTime(new Date().getTime() + 60 * 1000);
        return {
          user: {
            ...USER_DUMMY_DATA[findEmailIdx],
          },
          expired: date,
        };
      }
      throw new GraphQLError("User is not found", {
        extensions: { code: "USER_IS_NOT_FOUND", argumentName: "email" },
      });
    },
  },
};
