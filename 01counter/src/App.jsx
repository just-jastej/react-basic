import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  
  const addvalue = () => {
    console.log("Clicked", counter);
    setCounter(counter + 1)
  }

  const removevalue = () => {
    console.log("Clicked", counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Music and fun</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
