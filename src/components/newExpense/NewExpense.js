import "./NewExpense.css";
import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing,setIsEditing] =useState('')
  function startEditingHandler(event) {
    setIsEditing(true)
  }
  function stopEditingHandler(event) {
    setIsEditing(false)
  }
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: (Math.random()).toString(),
      ...enteredExpenseData,
    };
    setIsEditing(false)
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancle={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
