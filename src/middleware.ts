import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Obtener el token de la cookie
  const payload = await getToken({ req, secret: process.env.JWT_SECRET });

  // Obtener el accessToken (cambiamos token a accessToken)
  const accessToken = payload ? payload.accessToken : null;

  const { pathname } = req.nextUrl; // obtener el path actual

//   console.log("AccessToken desde el middleware:", accessToken);

  // Si el usuario tiene el accessToken y está intentando acceder a /login o /register, redirigirlo al home
  if (accessToken && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Si no hay accessToken y el usuario intenta acceder a rutas protegidas
  if (!accessToken && (pathname === '/' || pathname === '/account' || pathname === '/reminders' || pathname === '/add-reminders')) {
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
    '/add-reminders',
  ],
};
