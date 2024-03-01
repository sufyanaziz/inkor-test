"use client";
import useUserAccess from "@/common/hooks/useUserAccess";
import Link from "next/link";

export default function Home() {
  const { isLogin, isClient } = useUserAccess();
  if (!isClient) return null;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li className="hover:underline">
          {isLogin ? (
            <Link href={"/user"}>User</Link>
          ) : (
            <Link href={"/auth"}>Login</Link>
          )}
        </li>
      </ul>
    </main>
  );
}
