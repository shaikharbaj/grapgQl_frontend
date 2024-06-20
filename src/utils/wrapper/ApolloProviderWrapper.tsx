// components/ApolloProviderWrapper.tsx

"use client"; // Ensures this component is treated as a client component

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "@/app/graphql/graphql.setup";

export default function ApolloProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>;
}
