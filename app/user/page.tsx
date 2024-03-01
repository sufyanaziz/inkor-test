"use client";
import withAuth from "@/common/components/withAuth";
import React from "react";
import useUser from "./hooks/useUser";
import Link from "next/link";
import Loader from "@/common/components/Loader";

const Page = () => {
  const { loading, data, logout } = useUser();

  if (loading) return <Loader />;
  return (
    <main className="w-[300px]">
      <h1 className="text-xl font-bold mb-5">Data User</h1>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p className="flex-1">Name</p>
          <p className="flex-1">{data.name}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">Email</p>
          <p className="flex-1">{data.email}</p>
        </div>
        <div className="flex gap-2">
          <p className="flex-1">Member No</p>
          <p className="flex-1">{data.memberNo}</p>
        </div>

        <div className="flex gap-2 mt-5">
          <Link className="w-full" href={"/post"}>
            <button className="bg-cyan-600 p-3 rounded w-full">Post</button>
          </Link>
          <button className="bg-cyan-200 p-3 rounded w-full" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default withAuth(Page);
