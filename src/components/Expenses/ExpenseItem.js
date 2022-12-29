import { useCallback } from "react";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpensePrice from "./ExpensePrice";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //state variable and what Max dubs, Updating Function. 
  //useState holds the initial state and pooUpdate holds the new state


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <li className="expense-item__description">
        <h2>{props.title}</h2>
        <ExpensePrice amount={props.amount} />
      </li>
    </Card>
  );
}

export default ExpenseItem;
//
