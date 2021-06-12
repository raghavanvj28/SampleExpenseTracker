import React from 'react';
import { useState } from 'react/cjs/react.development';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const[EnteredTitle,SetEnteredTitle]=useState('');
    const[EnteredAmount,SetEnteredAmount]=useState('');
    const[EnteredDate,SetEnteredDate]=useState('');
    const TitleHandler=(event)=>{
        SetEnteredTitle(event.target.value);
    }
    const AmountHandler=(event)=>{

        SetEnteredAmount(event.target.value);
    }

    const DateHandler=(event)=>{
        SetEnteredDate(event.target.value);
    }
    const FormHandler=(event)=>{
        event.preventDefault();
        const expensedata={
            title: EnteredTitle,
            amount: +EnteredAmount,
            date: new Date(EnteredDate),
        }
        props.onEnteredAddExpense(expensedata);
        SetEnteredDate('');
        SetEnteredTitle('');
        SetEnteredAmount('');
        console.log(expensedata);
    };
return <form onSubmit={FormHandler}>
    <div className ="new-expense__controls">
         <div className ="new-expense__control">
             <label>Title</label>
             <input type="text" value={EnteredTitle} onChange={TitleHandler}/>
         </div>
         <div className ="new-expense__control">
             <label>Amount</label>
             <input type="number" value={EnteredAmount} onChange={AmountHandler} min="0.01" step="0.01"  />
         </div>
         <div className ="new-expense__control">
             <label>Date</label>
             <input type="date" value={EnteredDate} min="2017-01-01" max="2024-01-31" onChange={DateHandler} />
         </div>
         </div>
         <div className="new-expense__actions">
             <button type='button' onClick={props.onChange}>Cancel</button>
             <button type="submit">Add NewExpense</button>
         </div>
</form>
}

export default ExpenseForm;