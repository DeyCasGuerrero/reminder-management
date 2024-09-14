import { NextRequest, NextResponse } from "next/server";
import { auth } from "./services/firebase";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const url = req.nextUrl.clone();


    if (!auth.currentUser?.getIdToken()) { // No se puede porque es del lado cliente y no se puede usar en el servidor
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/add-reminders', '/reminders','/account'],
};