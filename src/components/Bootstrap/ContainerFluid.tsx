import React from "react";

const ContainerFluid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  const className =
    props.className !== undefined
      ? `container-fluid ${props.className}`
      : "container-fluid";

  return <div className={className}>{props.children}</div>;
};

export default ContainerFluid;
