import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailwindCss test</h1>
      <Card username="Krishna" btnText="Click Me"/>
      <Card username="Arjuna" btnText="View Me"/>
      <Card />
    </>
  )
}

export default App
