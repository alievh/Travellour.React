import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, RefObject } from "react";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder: string;
  label?: string;
  mainDivClass?: string;
  name?: string;
  ref?: any;
  onChange? : ChangeEventHandler;
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
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
});

export default Input;
