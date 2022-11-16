import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./ExpensePrice.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


const Expenses = function (props) {
  const [year, changeYear] = useState(2022);

   const yearHandler = dataYear => {
      changeYear(dataYear);
    };
    return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={yearHandler} />
        {props.items.map((expense) => (<ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} 
        />
        ))}
        </Card>
        </div>
     );
  }

export default Expenses;