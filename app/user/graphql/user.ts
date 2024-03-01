import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GET_USER_DATA($tokenId: String!, $email: String!) {
    getUser(tokenId: $tokenId, email: $email) {
      email
      name
      memberNo
    }
  }
`;
