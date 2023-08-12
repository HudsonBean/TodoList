import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { todos } from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<todos, undefined>({
      query: () => "/todos",
    }),
  }),
});

export const { useGetAllTodosQuery } = api;
