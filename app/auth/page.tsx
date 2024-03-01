"use client";
import React, { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isClient, setIsClient] = useState(false);

  const { isLogin, onLogin } = useAuth();

  useEffect(() => {
    setIsClient(true);
    if (isLogin) {
      router.push("/user");
    }
  }, []);

  if (!isClient || isLogin) return null;
  return (
    <main className="flex flex-col border border-solid p-4">
      <input
        type="text"
        placeholder="Email"
        className="border border-solid px-3 py-1 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => onLogin(email)}
        className="bg-slate-500 p-2 text-white rounded"
      >
        submit
      </button>
    </main>
  );
};

export default Page;
