import gql from "graphql-tag";

export const commonTypeDefs = gql`
  type User {
    name: String
    memberNo: Float
    email: String
    tokenId: String
  }
`;
