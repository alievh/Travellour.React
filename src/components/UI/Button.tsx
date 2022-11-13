import React, { MouseEventHandler } from "react";

const Button: React.FC<{
  type?: "submit" | "reset" | "button";
  className: string;
  buttonIcon?: string;
  innerText?: string;
  disabled?: any;
  onClick?: MouseEventHandler;
}> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.buttonIcon !== null && <i className={props.buttonIcon}></i>}
      {props.innerText !== null && <span>{props.innerText}</span>}
    </button>
  );
};

export default Button;
