import React, { useState } from "react";

function App() {
  const [ number, setNumber ] = useState ( 0 )
  const [count, setCount] = useState ( "text" )
  
  function Increment() {
   setNumber(number + 1)

  }
  function Decrement () {
    setNumber (number - 1)

  }
  return (
    <div className="App">
      <h1>{number}</h1>
      <h1>{count}</h1>
      <input type='text' value={count}></input>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
