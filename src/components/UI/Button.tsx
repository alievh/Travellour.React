import React from "react";

const Button: React.FC<{ type: any, className: string, innerText: string}> = (props) => {
  return (
    <button type={props.type} className={props.className}>
      {props.innerText}
    </button>
  );
};

export default Button;
