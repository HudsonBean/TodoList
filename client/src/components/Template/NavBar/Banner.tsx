import React from "react";

export const Banner = () => {
  return (
    <div className="nav-bar__banner">
      <div className="banner__title">
        <span className="material-symbols-outlined banner__logo">sweep</span>
        <span className="banner__title">In Check</span>
      </div>
      <span className="material-symbols-outlined banner__settings-icon">
        settings
      </span>
    </div>
  );
};
