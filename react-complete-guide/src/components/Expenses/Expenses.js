import React, {useState} from 'react';

import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
     const [fiteredYear, setfilteredYear] = useState('2020');

     const filterChangeHandler = selectedYear => {
          setfilteredYear(selectedYear);
     }

     const filteredExpenses = props.items.filter(expense => {
          return expense.date.getFullYear().toString() === fiteredYear;
     });

     

    return (
         <div>
          <Card className="expenses">
               <ExpensesFilter selected={fiteredYear}  onChangeFilter={filterChangeHandler}/>
               <ExpensesChart expenses={filteredExpenses}/>
               <ExpenseList items={filteredExpenses} />
          </Card>
      </div>)
     };

export default Expenses;