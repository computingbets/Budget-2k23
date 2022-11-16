import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    //handler that takes data from state handlers and plugs data into
    const saveExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData)
    };
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
};

export default NewExpense;