import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  function operation(val) {
    if (val === "increment") {
      setCount((prev) => {
        return prev + 1;
      })
    } else if (val === "decrement") {
      setCount(prev => {
        if (prev == 0) return 0;
        return prev - 1;
      });
    } else {
      setCount(0);
    }
  }

  return (
    <div className='container'>
      <div className='counter-container'>
        <p className='count'>Count: {count}</p>
        <div className="buttons">
          <button onClick={() => operation("increment")}>Increment</button>
          <button onClick={() => operation("decrement")}>Decrement</button>
          <button onClick={() => operation("reset")}>Reset</button>
        </div>
      </div>
    </div>
    
  )
}

export default App
