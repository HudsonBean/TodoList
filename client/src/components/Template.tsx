import React from "react";
import "../styles/Template.css";

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
      </nav>
    </div>
  );
};
