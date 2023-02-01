import React from 'react';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./ExpensePrice.css";

const Expenses = function (props) {
  const [year, changeYear] = useState('2020');

   const yearHandler = dataYear => {
      changeYear(dataYear);
    };

    const showExpenses = props.items.filter(expense => {
      console.log("hello")
      return expense.date.getFullYear().toString() === year;
    });

    return (
    
      <div>
        <Card className="expenses">
          <ExpensesFilter 
          selected={year} 
          onChangeFilter={yearHandler} 
          />
          <ExpensesChart expenses={showExpenses} />
          <ExpensesList items={showExpenses} />
        </Card>
          </div>
       );
    };

export default Expenses;