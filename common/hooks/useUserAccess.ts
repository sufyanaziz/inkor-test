import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useUserAccess = () => {
  const { push } = useRouter();
  const [isClient, setIsClient] = useState(false);
  const setUserAccess = (key: string, data: Record<string, string>) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getUserAccess = <T>(key: string): T => {
    const item = localStorage.getItem(key) || "";
    return JSON.parse(item);
  };

  const removeUserAccess = (key: string) => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    setIsClient(true);
    return () => setIsClient(false);
  }, []);

  return {
    isLogin: !!Cookies.get("token"),
    isClient,
    setUserAccess,
    getUserAccess,
    removeUserAccess,
    logout: () => {
      localStorage.removeItem("@userAccess");
      Cookies.remove("token");
      push("/auth");
    },
  };
};

export default useUserAccess;
