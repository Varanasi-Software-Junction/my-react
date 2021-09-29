import React,{useState} from 'react';
const VsjForm=()=>
{
	const [n1, setN1] = useState(0);//Returns 2 pieces of data,n1 is the data and setN1 is the useState function.
	const [n2, setN2] = useState(0);
const n1ChangeHandler=(event)=>/*Event Handler for n1*/
{
	
	console.log("N1 Changed");
	console.log(event.target.value);
	setN1(Number( event.target.value));
};
	const n2ChangeHandler=(event)=>
{
	
	console.log("N2 Changed");
	console.log(event.target.value);
	setN2( Number( event.target.value));
};
	

	
	return <form>
	<label>N1</label>
	<input type="text" onChange={n1ChangeHandler}/>
	<h1>N1={n1}</h1>
	<label>N2</label>
	<input type="text" onChange={n2ChangeHandler}/>
	<h1>N2={n2}</h1>
	<h1>Sum = {n1 + n2}</h1>
	</form>
}
export default VsjForm;