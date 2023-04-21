import React, { useState } from 'react';
import Abhi from './Abhi';
import Hello from './Hello';
import Parent from './Parent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
       <div className= "card text-center my-5">
       <div className= "card-body">
   
      <h1>Counter App</h1>
      <div className= "my-5">
      <h2  className= "my-5">Counter: {count}</h2>
      <button className= "btn btn-success mx-3" onClick={increment}>Increment</button>
      <button className= "btn btn-danger mx-3" onClick={decrement}>Decrement</button>
    </div>
    </div>
    </div>

    <BrowserRouter>
        <Routes>
        <Route path='/all' element={<Parent/>}  ></Route> 
          <Route path='/abhi' element={<Abhi />}></Route>
          <Route path='/hello' element={<Hello />}></Route>
        </Routes>
      </BrowserRouter>
    
     </div>
     
  );
}

export default App;