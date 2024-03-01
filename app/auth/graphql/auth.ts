import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation UserLogin($email: String!) {
    login(email: $email) {
      expired
      user {
        email
        tokenId
        memberNo
      }
    }
  }
`;
