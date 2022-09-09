import React from "react";

const Container: React.FC<{ children: React.ReactNode; className?: string }> = (
  props
) => {
  const className = props.className !== undefined ? `container ${props.className}` : 'container';

  return <div className={className}>{props.children}</div>;
};

export default Container;
