import React, { useState } from "react";
import "./Cost.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";
const Cost = (props) => {
  const [previosYear, setYear] = useState("2021");
  const ChangeYear = (value) => {
    setYear(value);
  };

  const filterCost = props.cost.filter((cost) => {
    return cost.date.getFullYear().toString() === previosYear;
  });
  return (
    <div>
      <Card className="costs">
        {" "}
        <CostsFilter year={previosYear} onChangeYear={ChangeYear} />
        <CostDiagram costs={filterCost} />
        <CostList costs={filterCost}></CostList>
      </Card>
    </div>
  );
};
export default Cost;
