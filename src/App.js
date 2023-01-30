// import ExpenseItem from "./components/ExpenseItem";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from 'react';

const dummy_data = [
  {
    id: "e1",
    title: "Dope Soap",
    amount: 10.61,
    date: new Date(2021, 4, 4),
  },
  { id: "e2", title: "Rent", amount: 7777, date: new Date(2022, 11, 31 )},
  {
    id: "e3",
    title: "Bandcamp stuff",
    amount: 15,
    date: new Date(2020, 8, 21),
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
    date: new Date(2022, 12, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);
 // console.log(expenses + "Expenses")
  //addExpenseHandler argument coming from newExpense.js
  //prevExpenses argument coming automatically from JS
  //adding expense to a list
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
