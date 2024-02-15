import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(request: any) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/api/auth/signin" || path === "/";

  try {
    const session = await getSession({ req: request }); // Corrected getSession parameter
    console.log("session on server side is ", session);
    if (session) {
      return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    if (!isPublicPath && !session) {
      return NextResponse.redirect(
        new URL("/api/auth/signin", request.nextUrl)
      );
    }
  } catch (error) {
    // Handle errors here (e.g., log the error or redirect to an error page)
    console.error("Error fetching session:", error);
    return NextResponse.redirect(new URL("/error", request.nextUrl));
  }
}

export const config = {
  middleware: "auth", // Corrected config key
  matcher: ["/", "/dashboard/", "/api/auth/signin", "/dashboard/:path*"],
};
