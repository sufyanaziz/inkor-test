import { TUserAccess } from "@/app/types";
import useUserAccess from "@/common/hooks/useUserAccess";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../graphql/post";

type TResUsePost = {
  loading: boolean;
  data: {
    amount: number;
    memberNo: number;
  };
};

const usePost = (): TResUsePost => {
  const { getUserAccess } = useUserAccess();
  const userAccess = getUserAccess<TUserAccess>("@userAccess");

  const { data, loading } = useQuery(GET_POST, {
    variables: {
      memberNo: userAccess.user.memberNo,
    },
  });

  return {
    loading,
    data: loading
      ? {}
      : {
          ...data.getPost,
          ...data.getPost.user,
        },
  };
};

export default usePost;
