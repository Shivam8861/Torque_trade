import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isproctectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservation(.*)"
])


export default clerkMiddleware(async (auth,req)=>{
  const {userId} = await auth ();

  if(!userId && isproctectedRoute(req)){
    const {redirectToSignIn} = await auth ();
    return redirectToSignIn;
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 