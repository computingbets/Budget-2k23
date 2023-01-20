import React from "react";
import "./ExpenseForm.css";
import { useState } from 'react';

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

      //passing data up through props, going to ExpenseItem
      props.onSaveExpense(formData);
    
      //clears form
      changeName('');
      modPrice('');
      alterDate('');
    };

  const landingHandler = () =>{
    let addState = 2; 
   {addState % 2 === 0 && <form onSubmit={subHandler}>
   <div className="new-expense__controls">
     <div className="new-expense__control">
       <label>Title</label>
       <input type="text" value={newName} onChange={nameChangeHandler} />
     </div>
     <div className="new-expense__control">
       <label>Amount</label>
       <input type="number" value={newPrice} min="0.00" step="0.50" onChange={priceHandler} />
     </div>
     <label>Date</label>
     <input type="date" value={newDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
   </div>
   <div className="new-expense__actions">
     <button type="submit">Add Expense</button>
   </div>
  </form>
  {addState + 1}
}  
//attempted to make a counter, handlers, jsx to conditionally show data per Max's assignment. Proceeding w solution.
{ addState % 2 != 0 && 
  <div className="expense_landing">
    <button className="expense_button" onClick={landingHandler}>Add Expense</button>
  </div>
  {addState + 1}
 }

};
}

export default ExpenseForm;
