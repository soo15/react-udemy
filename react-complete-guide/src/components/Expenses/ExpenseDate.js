import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const Year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className="expense-date">
            <div class="expense-date__month">{month}</div>
            <div class="expense-date__year">{Year}</div>
            <div class="expense-date__day">{day}</div>
        </div>
    )
};


export default ExpenseDate;