import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // Update the "count" state by 1
    setCount(count + 1);
  };

  const decrement = () => {
    // Update the "count" state by -1
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
