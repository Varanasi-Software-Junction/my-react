import React, { useState } from 'react';

const Interest = () => {

    const [p, setP] = useState(0);
    const [r, setR] = useState(0);
    const [t, setT]= useState(0);
        return <p>

        

       <label>/PRINCIPAL <input type="Number" onChange={event => setP(event.target.value)} /></label>
      <label> INTEREST <input type="Number" onChange={event => setR(event.target.value)} /></label>
     <label>  TIME <input type="Number" onChange={event=> setT(event.target.value)}/></label>
        <h2>p {p}</h2>
        <h2>R {r}</h2>
        <h2>T{t}</h2>
        <h2>CI {p* Math.pow(1+r/100,t)-p}</h2>
        <h2>SI{(p*r*t)/100.0}</h2>
    </p>;
}
export default Interest;