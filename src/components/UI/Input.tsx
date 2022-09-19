import React from "react";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder: string;
  label?: string;
  mainDivClass?: string;
  ref?: any;
}> = React.forwardRef((props, forRef?: any) => {
  const mainDivClassName = "form-group " + props.mainDivClass;

  return (
    <div className={mainDivClassName}>
      {props.label !== null && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        ref={forRef}
      />
    </div>
  );
});

export default Input;
