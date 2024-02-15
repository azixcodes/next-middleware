"use client";
import Nav from "@/components/Nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
};

export default layout;
