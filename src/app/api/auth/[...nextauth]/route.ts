import { prisma } from '@/lib/prisma'
import { compare } from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signOut } from 'next-auth/react'
// import EmailProvider from "next-auth/providers/email";
// export const authOptions: NextAuthOptions = {
//  pages:{
//   signIn: '/login'
//  },
//  session:{
//   strategy: 'jwt'
//  },
//  providers: [
//   CredentialsProvider({
//     name: 'Sign in',
//     credentials: {
//       email: {
//         label: 'Email',
//         type: 'email',
//         placeholder: 'hello@example.com'
//       },
//       password: { label: 'Password', type: 'password' }
//     },
//   try {
//     async authorize(credentials){
//       if(!credentials?.email || !credentials.password){
//         return null

//       }
  
//     const user = await prisma.user.findUnique({
//       where: {
//         email: credentials.email
//       }
//     })

//     if (!user) {
//       return null
//     }
    
//   } catch (error) {
//     return null
//   }
//   })]}

// export default NextAuth(authOptions);

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
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            Email: credentials.email
          }
        })

        if (!user) {
          console.log('user not found')
          return "user not found"
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.Password
        )

        if (!isPasswordValid) {
          console.log('wrong password')
          return null
        }

        return {
          id: user.Id + '',
          email: user.Email,
          name: user.Name,
        }
        

      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey
        }
      }
      return token
    },
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url
    //   return baseUrl
    // }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }