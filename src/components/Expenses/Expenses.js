
import './Expenses.css'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';
import Expenselist from './Expenselist';
import ExpenseChart from './ExpenseChart';
function Expenses(props)
{
    const[filteredyear,Setfilteredyear]=useState('2019');
    const filteredYearHandler=(selectedyear)=>{
        Setfilteredyear(selectedyear);
        console.log(selectedyear);

    }
    const FilteredExpense=props.items.filter((expense)=>{
return expense.date.getFullYear().toString()===filteredyear;
    })
    
return (
  <div>
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredyear}
        onChangeFilter={filteredYearHandler}
      />
      <ExpenseChart expenses={FilteredExpense}/>
      <Expenselist items={FilteredExpense}/>
    </Card>
  </div>
);
}
export default Expenses;