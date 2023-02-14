import CostDate from "./CostDate";
import Card from "../UI/Card";
import "./Costitem.css";
// import React, { useState } from "react";
const Costitem = (props) => {
  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>
      <div className="cost-item__description">
        <h2>{props.description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default Costitem;
