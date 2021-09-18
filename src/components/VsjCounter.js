import React, { useState } from 'react';
import './vsjCounter.css'
const  VsjCounter = (props) =>
{
	const [count, setCount] = useState(0);
	const [num1, setAdd1] = useState(0);
	const [num2, setAdd2] = useState(0);
	return <p>
	
	<h2>Count = {count}</h2>
	<button onClick={() => setCount(count + 1)}>
        Counter
      </button>
	  <input type="Number"  onChange={event => setAdd1(event.target.value)}/>
	  <input type="Number"  onChange={event => setAdd2(event.target.value)}/>
	  <h2>{num1}</h2>
	  <h2>{num2}</h2>
	  <h2>{Number(num1) + Number(num2)}</h2>
	</p>;
}
export default VsjCounter;