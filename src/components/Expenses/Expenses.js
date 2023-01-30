import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./ExpensePrice.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = function (props) {
  const [year, changeYear] = useState();

   const yearHandler = dataYear => {
       changeYear(dataYear);
     // console.log("datayear " + dataYear)
     /// console.log(year + " JS")
    };

    const showExpenses = props.items.filter(expense => {
      console.log("hello")
      return expense.date.getFullYear().toString() === year;
    })

    return (
    
      <div>
        <Card className="expenses">
          <ExpensesFilter selected={year} onChangeFilter={yearHandler} />
          <ExpensesChart expenses={showExpenses} />
          <ExpensesList items={showExpenses} />
          </Card>
          </div>
       );
    } 

export default Expenses;