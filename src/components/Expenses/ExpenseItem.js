import { useCallback } from "react";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpensePrice from "./ExpensePrice";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //state variable and what Max dubs, Updating Function. 
  //useState holds the initial state and pooUpdate holds the new state
  const [poop, pooUpdate] = useState(props.title);
  const clickHandler = () => {
    pooUpdate("It's Groundhog Day!!!");
    };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{poop}</h2>
        <ExpensePrice amount={props.amount} />
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
//
