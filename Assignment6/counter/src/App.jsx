import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => {
          if(count-1>=0){
            setCount(count-1);
          }else{
            setCount(0);
          }
        })}>
          -
        </button>
        <button >
          {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
    </>
  )
}

export default App
