import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [newName, changeName] = useState('');
    const [newPrice, modPrice] = useState('');
    const [newDate, alterDate] = useState('');


    //these functs are handlers that get passed the onChange event and fire the stateFunct
    const nameChangeHandler = (event) => {
        //state funct grabs user input and loads the new State in the state variable
        changeName(event.target.value);
    };
    const priceHandler = (event) => {
        modPrice(event.target.value)
    };

    const dateHandler = (event) => {
        alterDate(event.target.value);
    }

    const subHandler = (event) =>{
      event.preventDefault();
      
      //store state vars, after handler from either price, date, or title fires, in obj
      const formData = {
        title: newName,
        amount: newPrice,
        date: new Date(newDate)
      };

      //passing data through props, going to ExpenseItem
      props.onSaveExpense(formData);
    
      //clears form
      changeName('');
      modPrice('');
      alterDate('');
    };

  return ( 
  <form onSubmit={subHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={newName} onChange={nameChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={newPrice} min="0.01" step="0.50" onChange={priceHandler} />
      </div>
      <label>Date</label>
      <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
    </div>
    <div className="new-expense__actions">
      {/* passing data to AddExpense folder */}
    <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
