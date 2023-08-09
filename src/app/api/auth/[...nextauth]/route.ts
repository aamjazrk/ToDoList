import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@auth/prisma-adapter";
// next-auth.d.ts

import { Session } from "next-auth";

declare module "next-auth" {
  interface SessionTemp {
    user: {
      name?: string;
      email?: string;
      role?: string; // Add the 'role' property here with the appropriate type
    };
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
    signOut: '/'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      id: "email-login", // mapping credential id
      name: 'Signin',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        const { email, password } = credentials
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        try {
          const data = await res.json();
          console.log(data)
          if (data.status == '200') {
            console.log('role: ', data.user.role)
            return {
              id: data.user.id + '',
              email: data.user.email,
              name: data.user.name,
              role: data.user.role,
              randomKey: 'Hey cool'
            }
          }
          console.log("Authorization error 1: ", data.message)
          return null // nextauth.js can only return object,null, throw error -> If you return null then an error will be displayed advising the user to check their details.
          // https://next-auth.js.org/providers/credentials
        } catch (error) {
          console.log(error)
          return null
        }
      }

    }),
  ],
  callbacks: {

    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },



}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST } // predential must declare method
