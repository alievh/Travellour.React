import React from "react";

const Col: React.FC<{
  children: React.ReactNode;
  className?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}> = (props) => {
  let className = props.className !== undefined ? `${props.className} ` : "";

  className =
    props.xl !== undefined ? (className += `col-xl-${props.xl} `) : className;
  className =
    props.lg !== undefined ? (className += `col-lg-${props.lg} `) : className;
  className =
    props.md !== undefined ? (className += `col-md-${props.md} `) : className;
  className =
    props.sm !== undefined ? (className += `col-sm-${props.sm} `) : className;

  return <div className={className}>{props.children}</div>;
};

export default Col;
