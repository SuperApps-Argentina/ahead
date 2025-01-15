import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

// Middleware para proteger las rutas
export async function middleware(request: NextRequest) {
  const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET ?? 'default-secret-key',
      salt: ''
  });

  // Si no hay sesión (token) y la ruta es protegida, redirigir al login
  if (!token && request.nextUrl.pathname.startsWith('/')) {
    const loginUrl = new URL('/login', request.url);
    // Si la URL tiene un 'callbackUrl', lo agregamos
    const callbackUrl = request.nextUrl.pathname;
    loginUrl.searchParams.set('callbackUrl', callbackUrl);  // Pasar la URL original para redirigir después de iniciar sesión
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configurar las rutas protegidas que van a ser interceptadas por el middleware
export const config = {
  matcher: [ '/dashboard/:path*', '/profile/:path*'], // Asegúrate de agregar las rutas que quieres proteger
};
