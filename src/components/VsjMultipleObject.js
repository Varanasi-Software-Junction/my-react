import React, { useState } from 'react';
const VsjMultipleObject=()=>
{
	const [
	sumData, setSum] = useState({
		n1:0,
		n2:0
		
		
	});
	
const sumN1=(event)=>
{
	setSum( {
		...sumData,
		n1:Number( event.target.value),
		
	});
	console.log("Object Changed");
	
};
const sumN2=(event)=>
{
	setSum( {
		...sumData,
		n2:Number( event.target.value),
		
	});
	console.log("Object Changed");
	
};

	

	
	return <form>
	<label>N1</label>
	<input type="text" onChange={sumN1}/>
	
	<label>N2</label>
	<input type="text" onChange={sumN2}/>
		{sumData.n1 + sumData.n2}
		
	</form>
}
export default VsjMultipleObject;