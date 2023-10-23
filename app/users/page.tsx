'use client'
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Users from "./Users";

const queryClient = new QueryClient();

const UsersPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
};

export default UsersPage;
