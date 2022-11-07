// import { useState } from "react";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(prop) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <li className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">Ksh.{prop.amount}</div>
      </li>
    </Card>
  );
}

export default ExpenseItem;
