import { useState } from 'react'
import logImg from "./assets/logo.png"
import NavBar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='space-y-4'>
      <NavBar></NavBar>
      <section id='hero' className='grid grid-rows-2 items-center justify-items-center h-[80vh]'>
        <div className='h-full w-full'></div>
        <img src={logImg} alt="logo" className='h-1/2 object-contain'/>
      </section>
      <section>
        
      </section>
    </main>
  )
}

export default App
