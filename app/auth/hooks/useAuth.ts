import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../graphql/auth";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useUserAccess from "@/common/hooks/useUserAccess";

const useAuth = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const { setUserAccess } = useUserAccess();

  const [login, { data, loading }] = useMutation(USER_LOGIN, {
    onCompleted: (res) => {
      Cookies.set("token", res.login.user.tokenId, {
        expires: new Date(res.login.expired),
      });
      router.push("/user");
      setUserAccess("@userAccess", res.login);
      setIsSuccess(true);
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });

  useEffect(() => {
    return () => setIsSuccess(false);
  }, []);

  return {
    isLogin: !!Cookies.get("token"),
    res: {
      isSuccess,
      data,
      loading,
    },
    onLogin: (email: string) => {
      console.log("login", email);
      login({
        variables: {
          email,
        },
      });
    },
  };
};

export default useAuth;
