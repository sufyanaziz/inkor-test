import { TUserAccess } from "@/app/types";
import useUserAccess from "@/common/hooks/useUserAccess";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/user";

type TResUseUser = {
  loading: boolean;
  data: {
    email?: string;
    memberNo?: number;
    name?: string;
  };
  logout: () => void;
};

const useUser = (): TResUseUser => {
  const { getUserAccess, logout } = useUserAccess();
  const userAccess = getUserAccess<TUserAccess>("@userAccess");

  const { data, loading } = useQuery(GET_USER, {
    variables: {
      tokenId: userAccess.user.tokenId,
      email: userAccess.user.email,
    },
  });

  return {
    loading,
    data: loading ? {} : data.getUser,
    logout,
  };
};

export default useUser;
