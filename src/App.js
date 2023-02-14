import React, { useState } from "react";
import Cost from "./components/Cost/Cost";
import NewCost from "./components/NewCost/NewCost";
const COST_FIRST = [
  {
    id: 0,
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: 1,
    date: new Date(2022, 11, 1),
    description: "Телевизор",
    amount: 799.99,
  },
  {
    id: 2,
    date: new Date(2022, 8, 13),
    description: "Монитор",
    amount: 699.99,
  },
];
const App = () => {
  const [cost, setCost] = useState(COST_FIRST);

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement(
  //     "h1",
  //     { className: "title" },
  //     "React",
  //     React.createElement(Cost, { cost: cost })
  //   )
  // );
  const addConstHandler = (cost) => {
    setCost((prevCost) => {
      return [cost, ...prevCost];
    });
  };
  return (
    <div>
      <NewCost onAddConst={addConstHandler}></NewCost>
      <Cost cost={cost} />
    </div>
  );
};

export default App;
