import React from "react";

const Row: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  const className =
    props.className !== undefined ? `row ${props.className}` : "row";

  return <div className={className}>{props.children}</div>;
};

export default Row;
