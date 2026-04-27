import NextAuth from "next-auth"
import {JWT} from 'next-auth/jwt'

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
    user:{
        name:string,
        email:string,
        role:string
    },
    token:string
  }
  interface Session {
    user: {
     name:string,
     email:string,
     role:string
    }
  }
}


declare module "next-auth/jwt" {
    interface JWT {
        user:{
            name:string,
            email:string,
            role:string
        },
        token:string
    }
}





