import React, { useEffect, useState } from 'react';
import './InterestCalculator.css';

const InterestCalculator = () => {
    function f1(event) {
        setPrincipal(Number(event.target.value));
    }
    function f2(event) {
        setRate(Number(event.target.value));
    }
    function f3(event) {
        setTime(Number(event.target.value));
    }

    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [si, setSi] = useState(0);
    const [ci, setCi] = useState(0);
    useEffect(() => {
        // document.title = `SI=${(principal * rate * time)/100.0}`;
        setSi((principal * rate * time) / 100.0);
        setCi(principal * Math.pow(1 + rate / 100.0, time) - principal);
    });
    return (<center>
        Principal <input className='positive' onChange={f1} type='number'></input><br></br>
        Rate <input onChange={f2} type='number'></input><br></br>
        Time <input onChange={f3} type='number'></input><br></br>



        <div>
            <h1>Principal={principal}</h1>
            <h1>Rate={rate}</h1>
            <h1>Time={time}</h1>
            <h1>Simple Interest ={si}</h1>
            <h1>Compound Interest ={ci}</h1>
            <h1>{`SI=${(principal * rate * time)/100.0}`}</h1>

        </div>


    </center>

    );
}
export default InterestCalculator;