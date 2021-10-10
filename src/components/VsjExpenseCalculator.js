import React, { useState } from 'react';

const  VsjExpenseCalculator = (props) =>
{
	const [
	expenseData, setExpense] = useState({
		item:'',
		amount:0,
		tdate:''
		
		/* Use n object instead of two useState*/
	});
	const itemChangeHandler=(event)=>
	{
		setExpense(event.target.value);
		console.log(event.target.value);
	};
	
	return  <form>
  <div class="form-group">
    <label for="item">Item</label>
    <input type="text" class="form-control" onChange={itemChangeHandler} placeholder="Enter Item" id="item"/>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="number" class="form-control" placeholder="Enter Amount" id="amount"/>
  </div>
  <div class="form-group">
    <label for="tdate">Date</label>
    <input type="date" class="form-control" placeholder="Enter Date" id="tdate"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>;
}
export default VsjExpenseCalculator;