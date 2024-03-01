"use client";
import withAuth from "@/common/components/withAuth";
import React from "react";
import usePost from "./hooks/usePost";
import { useRouter } from "next/navigation";
import Loader from "@/common/components/Loader";

const Page = () => {
  const { back } = useRouter();
  const { loading, data } = usePost();

  if (loading) return <Loader />;

  return (
    <main className="w-[300px]">
      <h1 className="text-xl font-bold mb-5">Data Post</h1>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p className="flex-1">Member No</p>
          <p className="flex-1">{data.memberNo}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">Amount</p>
          <p className="flex-1">{data.amount}</p>
        </div>

        <div className="flex gap-2 mt-5">
          <button className="bg-cyan-600 p-3 rounded w-full" onClick={back}>
            Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default withAuth(Page);
