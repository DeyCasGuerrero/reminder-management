// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req:NextRequest) {
    // Obtener el token de la cookie
    const payload = await getToken({ req, secret: process.env.JWT_SECRET });
    
    const token = payload ? payload.token : null;
    
    const {pathname} = req.nextUrl; //me da directamente el path

    console.log("el token wasadasdas", token);
    // console.log("el pahtasadsa", pathname);

    if(token && (pathname === '/login' || pathname === '/register')){
        return NextResponse.redirect(new URL('/', req.url));
    }

    if(!token && (pathname ==='/' || pathname === '/account' || pathname === '/reminders' || pathname === '/add-reminders')){
        return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // Si el token es válido, permitir el acceso
    return NextResponse.next();
}

// Define las rutas donde se aplica el middleware
export const config = {
    matcher: [
        '/login',
        '/register',
        '/',
        '/reminders',
        '/add-reminders'
    ], 
};
