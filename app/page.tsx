"use client";
import Card from "@/common/components/Card";
import useUserAccess from "@/common/hooks/useUserAccess";
import Link from "next/link";

export default function Home() {
  const { isLogin, isClient } = useUserAccess();
  if (!isClient) return null;
  return (
    <Card>
      <ul>
        <li className="hover:underline">
          {isLogin ? (
            <Link href={"/user"}>User</Link>
          ) : (
            <Link href={"/auth"}>Login</Link>
          )}
        </li>
      </ul>
    </Card>
  );
}
