"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NEXT_PUBLIC_URL || "https://inkor-test.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="client-container flex items-center justify-center">
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </div>
  );
}
