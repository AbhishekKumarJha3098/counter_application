import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (

    <div className= "container my-5">
       <div className= "card text-center my-5"></div>
    <div className= "my-5">
      <h1>Counter App</h1>
      <h1>Counter: {count}</h1>
      <button className= "btn btn-success mx-3" onClick={increment}>Increment</button>
      <button className= "btn btn-danger mx-3" onClick={decrement}>Decrement</button>
    </div>
    </div>
  );
}

export default App;