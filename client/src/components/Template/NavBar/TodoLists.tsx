import React from "react";

export const TodoLists = () => {
  const mouseEnterHandler = (e: React.MouseEvent | any) => {
    const element: HTMLElement = e.currentTarget.getElementsByClassName(
      "todo-lists__more-icon"
    )[0];
    element.classList.remove("hidden");
  };
  const mouseLeaveHandler = (e: React.MouseEvent | any) => {
    const element: HTMLElement = e.currentTarget.getElementsByClassName(
      "todo-lists__more-icon"
    )[0];
    element.classList.add("hidden");
  };
  return (
    <ul className="nav-bar__todo-lists">
      <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <div className="todo-lists__data-wrapper">
          <div className="todo-lists__asthetics-wrapper">
            <span className="material-symbols-outlined todo-lists__todo-list-icon">
              checklist
            </span>
            <span className="todo-lists__todo-list-name">TodoList1</span>
          </div>
          <span className="todo-lists__todo-list-date">
            August 5, 2023, 1:15 AM
          </span>
        </div>
        <span className="material-symbols-outlined todo-lists__more-icon hidden">
          more_vert
        </span>
      </li>
      <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <div className="todo-lists__data-wrapper">
          <div className="todo-lists__asthetics-wrapper">
            <span className="material-symbols-outlined todo-lists__todo-list-icon">
              checklist
            </span>
            <span className="todo-lists__todo-list-name">SchoolStuff</span>
          </div>
          <span className="todo-lists__todo-list-date">
            January 18, 2019, 3:05 PM
          </span>
        </div>
        <span className="material-symbols-outlined todo-lists__more-icon hidden">
          more_vert
        </span>
      </li>
    </ul>
  );
};
