import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import nextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const prisma = new PrismaClient();

export default nextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  adapter: PrismaAdapter(prisma)
});
