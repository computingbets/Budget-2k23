import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./ExpensePrice.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


const Expenses = function (props) {
  const [year, changeYear] = useState();

   const yearHandler = dataYear => {
      changeYear(dataYear);
      console.log("datayear " + dataYear)
      console.log(year + " JS")
    };

    const showExpenses = props.items.filter(expense => {
      console.log("hello")
      return expense.date.getFullYear().toString() === year;
    })

    let expensesContent = <p>No expenses found</p>;

        //     {/* map function has array input, prev props.items, now yearFilter */}
        // {/* outputs keyed Component w dynamic data from App.js */}
        // {/* showExpenses returns true or false, based on conditions set... comparing props.items to selected year */}
        //* and displaying (returning true) the data that matches the state variable   */}
        if (showExpenses.length > 0) {
          console.log('conditional')
          expensesContent = showExpenses.map((expense) => (<ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} 
          />
        
          ));
        }
    return (
    
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={yearHandler} />
        {expensesContent}
        </Card>
        </div>
     );
  }

export default Expenses;