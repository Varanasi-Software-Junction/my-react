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
		setExpense( (prevState)=>{
		return {...prevState,item:event.target.value};
		
	});
	console.log(expenseData);
	};
	const amountChangeHandler=(event)=>
	{
		setExpense( (prevState)=>{
		return {...prevState,amount:Number(event.target.value)};
		
	});
	console.log(expenseData);
	};
	
	const dateChangeHandler=(event)=>
	{
		setExpense( (prevState)=>{
		return {...prevState,tdate:new Date(event.target.value)};
		
	});
	console.log(expenseData);
	};
	const submitHandler=(event)=>
	{
		event.preventDefault();
		console.log("Submitted");
		console.log(expenseData);
		setExpense({
		item:'',
		amount:0,
		tdate:''
		
		
	});
		
	};
	
	
	
	
	return  <form onSubmit={submitHandler}>
  <div class="form-group">
    <label for="item">Item</label>
    <input type="text" class="form-control" value={expenseData.item} onChange={itemChangeHandler} placeholder="Enter Item" id="item"/>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="number" class="form-control" value={expenseData.amount} placeholder="Enter Amount" id="amount" onChange={amountChangeHandler}/>
  </div>
  <div class="form-group">
    <label for="tdate">Date</label>
    <input type="date" class="form-control" value={expenseData.tdate} placeholder="Enter Date" id="tdate" onChange={dateChangeHandler}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>;
}
export default VsjExpenseCalculator;