import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Definir las rutas protegidas que queremos manejar
export const protectedRoutes = ["/", "/dashboard", "/profile"];  // Asegúrate de incluir las rutas protegidas que deseas

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async authorized({ auth, request }) { // Usa 'auth' aquí en lugar de 'token'
      const isLoggedIn = !!auth?.user;  // 'auth' contiene la sesión
      const isOnProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

      // Si está en una ruta protegida y no está logueado, redirigir
      if (isOnProtectedRoute && !isLoggedIn) {
        return false;  // Esto hará que se redirija automáticamente
      }
      return true;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        let user: User | null = null;

        // Lógica para verificar las credenciales
        if (credentials?.email === 'johndoe@example.com' && credentials?.password === '1234') {
          user = { email: 'johndoe@example.com', id: '1234', name: 'John Doe', image: 'https://media.cnn.com/api/v1/images/stellar/prod/190724142219-01-rutger-hauer-blade-runner-restricted.jpg?q=w_1110,c_fill/f_webp' };
        }

        if (!user) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
});

