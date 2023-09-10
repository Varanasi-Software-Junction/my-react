import React, { useState, useEffect } from 'react';


function App() {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

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

export default App;
