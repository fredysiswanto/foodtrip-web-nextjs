import { loginWithApi } from "@/lib/actions/authAction";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions, User } from "next-auth";

type TAuth = {
  id: string;
  email: string;
  token: string;
} & User;

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      token: string;
    };
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await loginWithApi(
          credentials.email,
          credentials.password,
        );
        if (user) return user;
        console.log(user);

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as TAuth).token;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        token: token.accessToken as string,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
