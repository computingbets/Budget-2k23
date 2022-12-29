// import ExpenseItem from "./components/ExpenseItem";

import NewExpense from "./components/AddExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';

const dummy_data = [
  {
    id: "e1",
    title: "Dope Soap",
    amount: 10.61,
    date: new Date(20, 4, 4),
  },
  { id: "e2", title: "Rent", amount: 7777, date: new Date(2022, 9, 31 )},
  {
    id: "e3",
    title: "Bandcamp stuff",
    amount: 15,
    date: new Date(2022, 8, 21),
  },
  {
    id: "e4",
    title: "Comp Desk (MDF)",
    amount: 80,
    date: new Date(2022, 9, 1),
  },
  {
    id: "e5",
    title: "Monthly Vaping",
    amount: 140,
    date: new Date(2022, 9, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);
 // console.log(expenses + "Expenses, should be the same as New.js13")
  //addExpenseHandler argument coming from newExpense.js
  //prevExpenses argument coming automatically from JS
  const addExpenseHandler = (expense) => {
    setExpenses(
      (prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <h2>Let's chill!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
