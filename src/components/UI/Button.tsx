import React from "react";

interface IButton {
    type: any,
    className: string,
    innerText: string
};

const Button = (props: IButton) => {
  return (
    <button type={props.type} className={props.className}>
      {props.innerText}
    </button>
  );
};

export default Button;
