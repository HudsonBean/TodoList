import React from "react";
import { Button } from "../../Button";
import { useCreateTodoMutation } from "../../../features/apiSlice";

const createNewListELement: React.FC<undefined> = () => {
  return <li></li>;
};

{
  /* <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
  <div className="todo-lists__data-wrapper">
    <div className="todo-lists__asthetics-wrapper">
      <span className="material-symbols-outlined todo-lists__todo-list-icon">
        checklist
      </span>
      <span className="todo-lists__todo-list-name">TodoList1</span>
    </div>
    <span className="todo-lists__todo-list-date">August 5, 2023, 1:15 AM</span>
  </div>
  <span className="material-symbols-outlined todo-lists__more-icon hidden">
    more_vert
  </span>
</li>; */
}

export const CreateTodoList = () => {
  return (
    <div className="nav-bar__create-todo-list">
      <Button
        onClick={() => {
          const a = createNewListELement(undefined);
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
