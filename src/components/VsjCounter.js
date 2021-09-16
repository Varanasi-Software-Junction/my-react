import React, { useState } from 'react';
import './vsjCounter.css'
const  VsjCounter = (props) =>
{
	const [count, setCount] = useState(0);
	return <p>
	
	<h2>Count = {count}</h2>
	<button onClick={() => setCount(count + 1)}>
        Counter
      </button>
	  
	</p>;
}
export default VsjCounter;