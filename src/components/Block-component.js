import React from "react";
import { CountUp } from 'countup.js';
import { useEffect, useRef } from 'react'
import "./block-components.css";


const BlockComponent = (prop) => {
  const countupRef = useRef(null);
  const countUp = new CountUp(countupRef.current, 5234);

// if (!countUp.error) {
//   countUp.start();
// } else {
//   console.error(countUp.error);
// }

  return (
    <div className="block" id={prop.id}>
      <span className="label">{prop.label}</span>&nbsp;<span>{prop.info}</span>
      &nbsp;<span>{prop.onEnd}</span>
      <div>{countUp.start()} ddd</div>
    </div>
  );
};

export default BlockComponent;
