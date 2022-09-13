import { useCallback } from "react";
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import ExpensePrice from "./ExpensePrice";


function ExpenseItem(props) {
  return (
     <div className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        {/* <div className="expense-item__price" amount={props.amount}>
          ${props.amount}
        </div> */}
        <ExpensePrice amount={props.amount} />
      </div>
      </div>
  );
}

export default ExpenseItem;
//