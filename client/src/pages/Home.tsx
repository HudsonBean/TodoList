import React from "react";
import { useGetAllTodosQuery } from "../features/apiSlice";

export const Home = () => {
  const { data, error, isLoading } = useGetAllTodosQuery(undefined);
  console.log(data, error, isLoading);
  return <div>Home</div>;
};
