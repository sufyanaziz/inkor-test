"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_URL || "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`h-[100vh] flex items-center justify-center`}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </div>
  );
}
