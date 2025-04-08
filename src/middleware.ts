import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/mock-users"]);

export default clerkMiddleware(async (auth, req) => {
    //if you're logged out, go to http://localhost:2000/mock-users you'll be redirected to login page 
    //you'll only access mock-users page if you're signed in (protected)
    if(isProtectedRoute(req)) await auth.protect();   //protect route 
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};