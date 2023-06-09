import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {db} from "../../../helpers/api/db"
import bcrypt from 'bcryptjs'
import { alertService } from "@/services"

const User = db.User;
export const authOptions = {
  // Configure one or more authentication providers
  secret: "say_lalisa_love_me_lalisa_love_me_hey",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

          const user = await User.findOne({
              email: credentials?.email
          }).select("+hash");

          if (!user) {
              throw new Error("Invalid credentials")
          }

        if (!(user && bcrypt.compareSync(credentials.password, user.hash))) {
         
          throw new Error("Invalid credentials")
        }

          return user
      }
  })
    // ...add more providers here
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.user = user)
        return token
    },
    session: async ({ session, token }) => {
        const user = token.user 
        session.user = user

        return session
    }
} 
}

export default NextAuth(authOptions)  