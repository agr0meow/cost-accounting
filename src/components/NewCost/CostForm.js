import "./CostForm.css";
import React, { useState } from "react";
const CostForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });

    // setUserInput((previosState) => {
    //   return {
    //     ...previosState,
    //     name: event.target.value,
    //   };
    // });
  };
  const amountHandler = (event) => {
    setInputAmount(Number(event.target.value));
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input onChange={nameChangeHandler} value={inputName} type="text" />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            onChange={amountHandler}
            value={inputAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            onChange={dateChangeHandler}
            value={inputDate}
            type="date"
            min="2019-01-1"
            step="2023-02-28"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.cancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
