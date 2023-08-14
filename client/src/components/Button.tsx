import React, { MouseEvent } from "react";
import "../styles/Button.css";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  borderRadius?: string;
  stopPropogation?: boolean;
  preventDefault?: boolean;
}

const clickHandler = (
  onClick: Function,
  stopPropagation: boolean | undefined,
  preventDefault: boolean | undefined
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
  fontSize,
  backgroundColor,
  borderRadius,
  stopPropogation,
  preventDefault,
}) => (
  <button
    onClick={clickHandler(onClick, stopPropogation, preventDefault)}
    style={{
      width: width && width,
      height: height && height,
      color: color && color,
      fontSize: fontSize && fontSize,
      backgroundColor: backgroundColor && backgroundColor,
      borderRadius: borderRadius && borderRadius,
    }}
  >
    {children}
  </button>
);
