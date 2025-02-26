import { useState } from 'react'
import './App.css'
import Card from './assets/Card';

function App() {

  const [count, setCount] = useState(10)
  const [color, setColor] = useState("pink")

  const addValue = () => {
    console.log("Counter checking", count + 1);
    setCount(count + 1)
  }

  const reduceValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm light:bg-gray-800 dark:border-gray-700">
        <h1>Counter</h1>
        <br />
        <h1>{count}</h1>
        <br />
        <button onClick={addValue} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Add</button>
        <button onClick={reduceValue} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-red-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Reduce</button>
      </div>

      <Card name='Indrajit' search='Read More' />
      <Card />
      <br/>

        <button onClick={() => setColor("blue")} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Blue</button>
        <button onClick={() => setColor("green")} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
        <button onClick={() => setColor("red")} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
        <button onClick={() => setColor("yellow")} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
        <button onClick={() => setColor("purple")} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>

      </div>

    </>
  )
}

export default App
