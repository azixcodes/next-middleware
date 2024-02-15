"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };
  return (
    <div className="h-14 flex px-2 bg-red-500 items-center justify-between">
      {session ? (
        <>
          {" "}
          <h4>{session?.user?.name}</h4>
          <img
            src={session?.user?.image as string}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
            onClick={handleSignOut}
          />
        </>
      ) : (
        <>
          <h4>Login to Auth</h4>
          <button
            className="px-3 py-1.5 rounded-md bg-sky-500"
            onClick={() => signIn("github")}
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
};

export default Nav;
