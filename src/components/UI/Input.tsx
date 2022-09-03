import React from "react";

const Input: React.FC<{
  type: string;
  id: string;
  placeholder: string;
  label: string;
  mainDivClass?: string;
}> = (props) => {
  const mainDivClassName = "form-group " + props.mainDivClass;

  return (
    <div className={mainDivClassName}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
