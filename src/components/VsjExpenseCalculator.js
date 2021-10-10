import React, { useState } from 'react';

const  VsjExpenseCalculator = (props) =>
{
	const [count, setCount] = useState(0);
	const [num1, setAdd1] = useState(0);
	const [num2, setAdd2] = useState(0);
	return  <form>
  <div class="form-group">
    <label for="item">Item</label>
    <input type="email" class="form-control" placeholder="Enter Item" id="item"/>
  </div>
  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="number" class="form-control" placeholder="Enter Amount" id="amount"/>
  </div>
  <div class="form-group">
    <label for="date">Date</label>
    <input type="date" class="form-control" placeholder="Enter Date" id="date"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>;
}
export default VsjExpenseCalculator;