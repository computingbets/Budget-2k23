import React from 'react';
import './ExpensesFilter.css';

//wrap event handler in a Component. Looking to store state variable and 
//pass data up to Expenses. Through props, yes. So, pre-solution code. 

const ExpensesFilter = (props) => {
  
  const filterDateHandler = (event) => {
    //console.log(event.target.value)
    props.onChangeFilter(event.target.value);
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterDateHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;