import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { commonTypeDefs } from "./common-type";
import { authTypeDefs, authResolvers } from "./auth-scheme";
import { userTypeDefs, userResolvers } from "./user-shceme";
import { postTypeDefs, postResolvers } from "./post-scheme";

const server = new ApolloServer({
  typeDefs: [commonTypeDefs, authTypeDefs, userTypeDefs, postTypeDefs],
  resolvers: [authResolvers, userResolvers, postResolvers],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
