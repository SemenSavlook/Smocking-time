import React from "react";
import { useEffect, useRef } from "react";
import "./block-components.css";
import { CountUp } from "countup.js";

export default function BlockComponent(prop) {
  console.log(prop);
  const countupRef = useRef(null);
  let countUpAnim;

  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    countUpAnim = new CountUp(
      countupRef.current,
      prop.info,
      prop.countJSprops || {}
    );
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <div className="block">
      <span className="label">{prop.label}</span>
      &nbsp;
      <span className="info" ref={countupRef}>
        0
      </span>
      &nbsp;
      <span className="info">{prop.onEnd}</span>
    </div>
  );
}
