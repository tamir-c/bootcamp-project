import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,

  callbacks: {
    async signIn(user, account, profile) {
      console.log("signIn", user, account, profile);
      return true;
    },
  },
});
export { handler as GET, handler as POST };
