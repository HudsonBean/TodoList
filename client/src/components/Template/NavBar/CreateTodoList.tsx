import React from "react";
import { Button } from "../../Button";

export const CreateTodoList = () => {
  return (
    <div className="nav-bar__create-todo-list">
      <Button
        onClick={() => {
          console.log("Hello World!");
        }}
        className="create-todo-list__button"
      >
        Create new todo
        <span className="material-symbols-outlined create-todo-button__plus-sign">
          add
        </span>
      </Button>
    </div>
  );
};
