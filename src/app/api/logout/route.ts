import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Clear the token cookie by setting an expired cookie with the same name
    const response = NextResponse.redirect("/");
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // Set the cookie expiration date in the past
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
