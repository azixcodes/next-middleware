"use client";

import { signIn } from "next-auth/react";
const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/dashboard",
          })
        }
        className="px-2 py-1.5 rounded-md border-none hover:ring-1 bg-sky-500 text-white"
      >
        Login Now
      </button>
    </div>
  );
};
export default Home;
