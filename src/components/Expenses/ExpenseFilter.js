import './ExpenseFilter.css';

const ExpenseFilter=(props)=>
{
  const dropdownchangehandler=(event)=>{
    props.onChangeFilter(event.target.value);

  }
return <div className="expense-filter">
   <div className="expense-filter__controls">
     <label>GetFilterByyear</label>
    <select value={props.selected}onChange={dropdownchangehandler}>
  <option value="2021">2021</option>
  <option value="2020">2020</option>
  <option value="2019">2019</option>
  <option value="2018">2018</option>
  <option value="2017">2017</option>
</select>
</div>
</div>
}
export default ExpenseFilter;