import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { todos } from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<todos, undefined>({
      query: () => "/todos",
    }),
    createTodo: builder.mutation<object, undefined>({
      query: (message: any) => ({
        url: "/todos/new",
        method: "POST",
        body: { content: message },
      }),
    }),
  }),
});

export const { useGetAllTodosQuery, useCreateTodoMutation } = api;
