import NextAuth from "next-auth/next";
import ZoomProvider from "next-auth/providers/zoom";

const handler = NextAuth({
  providers: [
    ZoomProvider({
      clientId: `${process.env.ZOOM_CLIENT_ID}`,
      clientSecret: `${process.env.ZOOM_CLIENT_SECRET}`,
    }),
  ],
});

export { handler as GET, handler as POST };
