// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // Get the base URL (handles localhost and production automatically)
  const origin = request.nextUrl.origin;
  
  // Fetch the session from Better Auth's built-in API route
  const response = await fetch(`${origin}/api/auth/get-session`, {
    headers: {
      // Pass the cookie along so Better Auth knows who is asking
      cookie: request.headers.get("cookie") || "",
    },
  });

  const session = await response.json();

  // If there is no valid session, redirect them to the sign-in page
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Otherwise, let them through!
  return NextResponse.next();
}

// Specify exactly which routes this middleware should protect
export const config = {
  matcher: [
    // Protect the entire dashboard and all its sub-routes
    "/dashboard/:path*", 
    
    // You can add more protected routes here:
    // "/profile",
    // "/settings/:path*"
  ],
};