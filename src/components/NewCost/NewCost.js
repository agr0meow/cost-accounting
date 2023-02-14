import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";
const NewCost = (props) => {
  const saveCostHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * (1000 - 3) + 3),
    };
    props.onAddConst(costData);
    setIsFormViseible(false);
  };
  const [isFormViseible, setIsFormViseible] = useState(false);
  const formHandler = () => {
    setIsFormViseible(true);
  };
  const cancelHandler = () => {
    setIsFormViseible(false);
  };
  return (
    <div className="new-cost">
      {!isFormViseible && (
        <button onClick={formHandler}>Добавить расход</button>
      )}
      {isFormViseible && (
        <CostForm onSaveCostData={saveCostHandler} cancel={cancelHandler} />
      )}
    </div>
  );
};
export default NewCost;
