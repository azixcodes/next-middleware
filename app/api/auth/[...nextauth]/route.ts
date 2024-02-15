import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

console.log(process.env.AUTH_GITHUB_ID as string);
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
};

export const hanlder = NextAuth(authOptions);

export { hanlder as GET, hanlder as POST };
