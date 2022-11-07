import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses, ];
    });
  };

  return (
    <div>
      <div style={{color:'white',position:'relative',textAlign:'center'}}><h1 >Expense Tracker</h1></div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <div style={{color:'white',position:'relative',textAlign:'center',backgroundColor:'black',marginLeft:'30%',marginRight:'30%'}}><p >A Fun Way to track Your Expenses <br/>Filter Them By Year</p></div>
    </div>
  );
}
export default App;

// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Lets get started"),
//   React.createElement("Expenses", { items: expenses })
// );
