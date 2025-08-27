import prisma from "@/lib/prisma";
import NextAuth, {NextAuthConfig} from "next-auth"
// import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from 'next-auth/providers/google'
import type { Provider } from 'next-auth/providers'

// export const BASE_PATH = "/api/auth";
const providers: Provider[] = [Google];

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  });

const authOptions: NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers,
    pages: {
        signIn: "/login",
        newUser: "/new-user"
    },
    // basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut} = NextAuth(authOptions);
