import React from "react";

const Button: React.FC<{
  type?: "submit" | "reset" | "button";
  className: string;
  buttonIcon?: string;
  innerText?: string;
  onClick?: any;
}> = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.buttonIcon !== null && <i className={props.buttonIcon}></i>}
      {props.innerText !== null && <span>{props.innerText}</span>}
    </button>
  );
};

export default Button;
