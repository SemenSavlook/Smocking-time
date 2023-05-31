import React from "react";
import "./block-components.css";

const BlockComponent = (prop) => {
  return (
    <div className="block" id={prop.id}>
      <span className="label">{prop.label}</span>&nbsp;<span>{prop.info}</span>
      &nbsp;<span>{prop.onEnd}</span>
    </div>
  );
};

export default BlockComponent;
