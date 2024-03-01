import { gql } from "@apollo/client";

export const GET_POST = gql`
  query GET_POST_DATA($memberNo: Float!) {
    getPost(memberNo: $memberNo) {
      amount
      user {
        memberNo
      }
    }
  }
`;
