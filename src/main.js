import React from "react";
import ReactDOM from "react-dom/client";
import BlockComponent from "./components/Block-component";

import "./main.css";

const startDate = new Date(2023, 4, 15, 9);
const timer = Date.now() - startDate;
const oneDay = 1000 * 60 * 60 * 24;
const freeDays = Math.floor(timer / oneDay);
const freeHours = Math.floor(timer / (1000 * 60 * 60));
const cigCost = 750;

const root = ReactDOM.createRoot(document.querySelector(".app"));
root.render(
  <>
    <h1>Привет Сэм!</h1>
    <h2>Твой текущий результат:</h2>
    <BlockComponent label={"Дней:"} info={freeDays} id={"days"} />
    <BlockComponent label={"Часов:"} info={freeHours} id={"hours"} />
    <BlockComponent
      label={"Денег:"}
      info={freeDays * cigCost + freeDays * cigCost * 0.1}
      onEnd={"₸"}
      id={"money"}
    />
  </>
);
