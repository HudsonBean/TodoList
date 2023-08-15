import React from "react";
import "../styles/Template.css";
import { Button } from "./Button";

export const Template = () => {
  const mouseEnterHandler = (e: React.MouseEvent | any) => {
    const element: HTMLElement = e.target.getElementsByClassName(
      "todo-lists__more-icon"
    )[0];
    element.classList.remove("hidden");
  };
  const mouseLeaveHandler = (e: React.MouseEvent | any) => {
    const element: HTMLElement = e.target.getElementsByClassName(
      "todo-lists__more-icon"
    )[0];
    element.classList.add("hidden");
  };
  return (
    <div className="template">
      <nav className="template__nav-bar">
        <div className="nav-bar__banner">
          <div className="banner__title">
            <span className="material-symbols-outlined banner__logo">
              sweep
            </span>
            <span className="banner__title">In Check</span>
          </div>
          <span className="material-symbols-outlined banner__settings-icon">
            settings
          </span>
        </div>
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
      </nav>
    </div>
  );
};
