import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  /*
  const [userInput, setUserInput] = useState({
    entertedTItle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        entertedTItle: event.target.value,
      };
    });
    console.log("Title changed!!", userInput);
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
    console.log("Amount changed!!", userInput);
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    console.log("Date changed!!", userInput);
  };

  const [userInput, setUserInput] = useState({
    entertedTItle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      entertedTItle: event.target.value,
    });
    console.log("Title changed!!", userInput);
  };
  const amountChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
    console.log("Title changed!!", userInput);
  };
  const dateChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
    console.log("Title changed!!", userInput);
  };
*/
  const [userInputTitle, setUserInputTitle] = useState("");
  const [userInputAmount, setUserInputAmount] = useState("");
  const [userInputDate, setUserInputDate] = useState("");
  const titleChangeHandler = (event) => {
    setUserInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setUserInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setUserInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValues = {
      title: userInputTitle,
      amount: +userInputAmount,
      date: new Date(userInputDate),
    };
    // two way binding
    props.onSaveExpenseData(enteredValues);
    setUserInputAmount("");
    setUserInputDate("");
    setUserInputTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInputTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInputAmount}
            type="number"
            min="0"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInputDate}
            type="date"
            min="2015-01-01"
            max="2023-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
