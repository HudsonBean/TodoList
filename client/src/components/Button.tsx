import React, { MouseEvent } from "react";
import "../styles/Button.css";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  width: string;
  height: string;
  color: string;
  backgroundColor: string;
  borderRadius: string;
  stopPropogation: boolean;
  preventDefault: boolean;
}

const clickHanlder = (
  onClick: Function,
  stopPropagation: boolean,
  preventDefault: boolean
) => {
  return (e: MouseEvent) => {
    //Stop propogation
    if (stopPropagation) {
      e.stopPropagation();
    }
    //PreventDefault
    if (preventDefault) {
      e.preventDefault();
    }
    onClick();
  };
};

export const Button: React.FC<Props> = ({
  onClick,
  children,
  width,
  height,
  color,
  backgroundColor,
  borderRadius,
  stopPropogation,
  preventDefault,
}) => (
  <button
    onClick={clickHanlder(onClick, stopPropogation, preventDefault)}
    style={{
      width: width,
      height: height,
      color: color,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
    }}
  >
    {children}
  </button>
);
