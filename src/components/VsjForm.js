import React,{useState} from 'react';
const VsjForm=()=>
{
	const [enteredamount, setEnteredAmount] = useState(0);
const amountChangeHandler=(event)=>
{
	
	console.log("Amount Changed");
	console.log(event.target.value);
	setEnteredAmount(event.target.value);
};
	

	
	return <form>
	<label>Amount</label>
	<input type="text" onChange={amountChangeHandler}/>
	<h1>{enteredamount}</h1>
	</form>
}
export default VsjForm;