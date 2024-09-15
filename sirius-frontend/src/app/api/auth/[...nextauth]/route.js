import NextAuth from "next-auth";
import GitHubProvider from 'next-auth/providers/github';

export const NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account }) {
            console.log('JWT Callback:', { token, account });

            if (account && account.access_token) {
                token.accessToken = account.access_token;
            }

            return token;
        },
        async session({ session, token }) {
            console.log('Session Callback:', { session, token });

            session.accessToken = token.accessToken;
            return session;
        }
    }
};

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
