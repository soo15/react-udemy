import React, {useState} from 'react';

import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
     const [fiteredYear, setfilteredYear] = useState('2020');

     const filterChangeHandler = selectedYear => {
          setfilteredYear(selectedYear);
     }

    return (
       <div className="expenses">
            <ExpensesFilter selected={fiteredYear}  onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
           <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
      </div>)
};

export default Expenses;