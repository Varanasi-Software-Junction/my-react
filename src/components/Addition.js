import './Addition.css';

import React,{useState} from 'react';
const Addition=()=>


{
const[n1,setN1]=useState(0);
const[n2,setN2]=useState(0);
const n1ChangeHandler=(event)=>
{
console.log("N1 Changed");
console.log(event.target.value);
setN1(Number(event.target.value));
}

const n2ChangeHandler=(event)=>
{
console.log("N1 Changed");
console.log(event.target.value);
setN2(Number(event.target.value));
}

return<div>
<label>N1</label>
<input type="text"onChange={n1ChangeHandler}/>
<h1>N1={n1}</h1>
<label>N2</label>
<input type="text"onChange={n2ChangeHandler}/>
<h1>N2={n2}</h1>
<h1>sum = {n1 * n2}</h1>
</div>
}
export default Addition;
