import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";

function Expenses(prop) {
  const [newYear, setNewYear] = useState("2020");
  function newYearHandler(newValue) {
    setNewYear(newValue);
  }
  const filteredExpenses = prop.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter selected={newYear} onNewYearHandler={newYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
