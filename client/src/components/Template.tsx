import React from "react";
import "../styles/Template.css";
import { Button } from "./Button";

export const Template = () => {
  return (
    <div className="template">
      <nav className="template__nav-bar">
        <div className="nav-bar__banner">
          <div className="banner__title">
            <span className="material-symbols-outlined banner__logo">
              sweep
            </span>
            <span>In Check</span>
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
        <div className="nav-bar__todo-lists">
          <ul>
            <li>Placeholder</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
