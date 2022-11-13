import React, { ChangeEventHandler } from "react";

const Input: React.FC<{
  className?: string;
  type: string;
  id: string;
  placeholder: string;
  label?: string;
  mainDivClass?: string;
  name?: string;
  ref?: any;
  multiple?: any;
  value?: string;
  autoComplete?: string;
  onChange? : ChangeEventHandler;
  onBlur? : ChangeEventHandler;
  inputError?: string;
}> = React.forwardRef((props, forRef?: any) => {
  const mainDivClassName = "form-group " + props.mainDivClass;

  return (
    <div className={mainDivClassName}>
      {props.label !== null && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type}
        className={props.className ? `form-control ${props.className}` : "form-control"}
        id={props.id}
        placeholder={props.placeholder}
        ref={forRef}
        onChange={props.onChange}
        name={props.name}
        multiple
        value={props.value}
        autoComplete={props.autoComplete}
        onBlur={props.onBlur}
      />
      {props.inputError && <span className="input-errors">{props.inputError}</span>}
    </div>
  );
});

export default Input;
