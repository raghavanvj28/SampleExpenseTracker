import React,{useState}from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpenses=(props)=>{
    const [EditButton,SetEditButton]=useState(false);
     const EditExpenseHandler=()=>{
         SetEditButton(true);
     }
     const StopExpenseHandler=()=>{
         SetEditButton(false);
     }

    const AddExpenseHandler=(enteredExpensedata)=>{
       const Expensedata={
           ...enteredExpensedata,
           id:Math.random().toString()
       }
       props.onAddnewExpense(Expensedata);
       SetEditButton(false);
    };
return <div className="new-expense">
   {!EditButton && <button onClick={EditExpenseHandler}>AddNewExpense</button>}
    {EditButton && <ExpenseForm onEnteredAddExpense={AddExpenseHandler} onChange={StopExpenseHandler}/>}
</div>
}

export default NewExpenses;