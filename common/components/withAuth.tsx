import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function withAuth(Component: React.FC) {
  return function WithAuth(props: any) {
    const [isClient, setIsClient] = useState(false);
    const cookie = Cookies.get("token");

    useEffect(() => {
      setIsClient(true);
      if (!cookie) {
        redirect("/auth");
      }
    }, []);

    if (!cookie || !isClient) return <Loader />;
    return <Component {...props} />;
  };
}
