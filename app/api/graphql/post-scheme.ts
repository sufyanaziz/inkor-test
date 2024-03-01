import gql from "graphql-tag";
import { GraphQLError } from "graphql";
import { DUMMY_POST_DATA, USER_DUMMY_DATA } from "./data";

export const postTypeDefs = gql`
  type Post {
    user: User
    amount: Float
  }

  type Query {
    getPost(memberNo: Float!): Post
  }
`;

export const postResolvers = {
  Query: {
    getPost: (_: any, { memberNo }: { memberNo: number }) => {
      const findPostIdx = DUMMY_POST_DATA.findIndex(
        (x) => x.memberNo === memberNo
      );
      if (findPostIdx > -1) {
        const post = DUMMY_POST_DATA[findPostIdx];
        const user = USER_DUMMY_DATA.find((x) => x.memberNo === memberNo);
        return { ...post, user: { ...user } };
      }
      throw new GraphQLError("Post is not found", {
        extensions: { code: "Post_IS_NOT_FOUND", argumentName: "memberNo" },
      });
    },
  },
};
