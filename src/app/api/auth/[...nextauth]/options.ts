import { loginStatic, loginWithApi } from '@/lib/actions/authAction'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthOptions, User } from 'next-auth'

const withOuthApi = process.env.WITHOUT_API

type TAuth = {
  id: string
  email: string
  token: string
} & User

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      token: string
    }
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (withOuthApi) {
          if (!credentials) return null
          const user = await loginStatic(
            credentials.email,
            credentials.password,
          )
          if (user) return user
          console.log(user)

          return null
        } else {
          if (!credentials) return null
          const user = await loginWithApi(
            credentials.email,
            credentials.password,
          )
          if (user) return user

          return null
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as TAuth).token
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        token: token.accessToken as string,
        name: token.name as string,
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
