import { NextRequest, NextResponse } from "next/server";

// If the incoming request has the "token" cookie
export function middleware(request: NextRequest) {
  const has_token = request.cookies.get("atHomee_token")?.name;
  const role = request.cookies.get("role")?.value;
  // console.log("🚀 ~ middleware ~ has_token:", has_token);
  const clientPaths = ["/profile/client/profile"];
  const adminPaths = ["/profile/admin/profile"];
  const { pathname } = request.nextUrl;
  // console.log(pathname);

  if (has_token === undefined || has_token === null) {
    request.nextUrl.pathname = "/auth/client/login";
    return NextResponse.redirect(request.nextUrl);
  }
  if (clientPaths.includes(pathname) && role === "admin") {
    request.nextUrl.pathname = pathname.replaceAll("client", "admin");
    return NextResponse.redirect(request.nextUrl);
  }
  if (adminPaths.includes(pathname) && role === "client") {
    request.nextUrl.pathname = pathname.replaceAll("admin", "client");
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/dashboard/categories",
    "/client/listing",
    "/profile/client/:any*",
    "/profile/admin/:any*",
  ],
};
