import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth , { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/app/libs/prismadb";
import prisma from "../../.././app/libs/prismadb";
import bcrypt from "bcrypt";

// creating auth provider in next 
export const authOptions : AuthOptions = {
    

    adapter: PrismaAdapter(prisma),
    providers :[
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string 
        }),    
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string 
        }),    
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email: {label: 'email' , type: 'text' },
                password: { label :'password' , type: 'password'},
            },
            async authorize(credentials){
                 if(!credentials?.email || !credentials?.password){
                    throw new Error('Invalid Credentials');
                 }

                //  prisma offers typesafety in our models 
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                
                // setting error{if not user and not have hashed password}
                if(!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }
   
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    // password jo credentials 
                    // user ke hashed password 
                    user.hashedPassword
                )
                
                //throwing error if not correct password
                if(!isCorrectPassword){
                    throw new Error('Invalid credentials');
                }

                // when all the information validate then we are able to send the client to our destination page
                return user;
            }
        }) 
    ],
    // where to redirect after registering
    pages:{
        signIn: '/',

    },
    // jwt logic
    debug: process.env.NODE_ENV === 'development',
    session:{
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);