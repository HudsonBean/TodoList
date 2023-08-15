import React from "react";
import { Banner } from "./NavBar/Banner";
import { CreateTodoList } from "./NavBar/CreateTodoList";
import { TodoLists } from "./NavBar/TodoLists";

export const NavBar = () => {
  return (
    <nav className="template__nav-bar">
      <Banner />
      <CreateTodoList />
      <TodoLists />
    </nav>
  );
};
