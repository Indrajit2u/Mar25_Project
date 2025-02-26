import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let Counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1)
  }

  const reduceValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Indrajit </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add {counter}</button>
      <br />
      <button onClick={reduceValue}>Reduce Value {counter}</button>
    </>
  )
}

export default App
