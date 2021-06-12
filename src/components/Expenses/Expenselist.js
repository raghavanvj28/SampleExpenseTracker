import ExpenseItem from './ExpenseItem';
import './Expenselist.css';

const Expenselist= (props)=>{
    if(props.items.length===0){
    return <h1 className="expenses-list__fallback">No Expense Found</h1>
    }

        return <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
               key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
      }
      </ul>

}

export default Expenselist;