import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

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

    if (!cookie || !isClient) return null;

    return <Component {...props} />;
  };
}
