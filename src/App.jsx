import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const addval = ()=>{
    count=count+1;
  }
  return (
    <>
    <h1 className='bg-green-400 text-black rounded-xl p-2 mb-5' > jatin chary</h1>
    <Card username="jatin chary" content="good boy hard working kingu" />
    <Card username= "varalaxmi" content="good boy hard working kingu" />
 

 
    </>
  )
}

export default App
