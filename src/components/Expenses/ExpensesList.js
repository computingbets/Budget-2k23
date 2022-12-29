import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  // map function has array input, prev props.items, now yearFilter
  // outputs keyed Component w dynamic data from App.js
  // showExpenses returns true or false, based on conditions set... comparing props.items to selected year
  // and displaying (returning true) the data that matches the state variable  
    console.log(props + ": list props")
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
        }


    return( 
        <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem    
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
        ))}
    </ul>
    );
        };

export default ExpensesList;
