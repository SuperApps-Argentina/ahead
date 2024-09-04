import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

// Your own logic for dealing with plaintext password strings; be careful!
//import { saltAndHashPassword } from "@/utils/password"


export const protectedRoutes = ["/"]

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: { 
    async authorized({ auth, request: {nextUrl} }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

      if (isOnProtectedRoute) {
        if (!isLoggedIn) {
          return false;
        }
        return true;
      }
      return true;
    }
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        let user: User | null = null
 
        // logic to salt and hash password
        //const pwHash = saltAndHashPassword(credentials.password)
        // logic to verify if user exists
        //user = await getUserFromDb(credentials.email, pwHash)

        // FIXME: This will be replaced with a database lookup
        if (credentials.email === 'johndoe@example.com' && credentials.password === '1234') {
          user = {email: 'johndoe@example.com', id: '1234', name: 'John Doe', image: 'https://media.cnn.com/api/v1/images/stellar/prod/190724142219-01-rutger-hauer-blade-runner-restricted.jpg?q=w_1110,c_fill/f_webp'};
        }
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with the their profile data
        return user
      }
    })
  ],
})