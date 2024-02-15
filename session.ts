"use client";
import { useSession } from "next-auth/react";

const SessionComponent = () => {
  const { data: session } = useSession();

  return session;
};

export default SessionComponent;
