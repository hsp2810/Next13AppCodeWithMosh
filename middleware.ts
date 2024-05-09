import middleware from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   return NextRe sponse.redirect(new URL("/new-page", req.url));
// }
export default middleware;

export const config = {
  // Can also provide the array
  matcher: ["/changepassword"],
};

// Notes
/*
    1. * zero or more
    2. + one or more
    3. ? zero or one 
*/
