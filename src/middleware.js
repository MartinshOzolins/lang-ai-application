import {
  clerkMiddleware,
  createRouteMatcher,
  auth,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
// Check if user is on the home page
const isHomePage = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If visiting the homepage and already logged in, redirect to /chat
  if (isHomePage(req)) {
    if (userId) {
      return NextResponse.redirect(new URL("/chat", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Run on everything except Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
