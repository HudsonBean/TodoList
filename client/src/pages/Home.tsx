import React from "react";
import { useGetAllTodosQuery } from "../features/apiSlice";

export const Home = () => {
  const { data } = useGetAllTodosQuery(undefined);
  console.log(data?.todos[0].content);
  return <div>Home</div>;
};
