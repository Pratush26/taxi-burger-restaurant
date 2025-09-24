import { useEffect, useState } from "react";
import logImg from "./assets/logo.png"
import NavBar from './components/Navbar'
import './App.css'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/api/hello")
    //   .then(res => res.json())
    //   .then(data => setData(data.message))
    //   .catch(err => console.error(err));

    fetch("http://localhost:5000/api/categories")
      .then(res => res.json())
      .then(data => setData(data.categories))
      .catch(err => console.error(err));
  }, []);


  return (
    <main className='space-y-4'>
      <NavBar></NavBar>
      <section id='hero' className='grid grid-rows-2 items-center justify-items-center h-[80vh]'>
        <div className='h-full w-full'></div>
        <img src={logImg} alt="logo" className='h-1/2 object-contain' />
      </section>
      <section className="overflow-x-auto custom-scrollbar pb-2">
        <div className="flex items-center justify-center gap-4 w-max px-8">
          {data.map((e, i) => (
            <span key={i} className="flex items-center justify-between text-sm font-semibold border-gray-400 gap-3 px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors duration-200 cursor-pointer transition-discrete">
              <img src={e.categoryImg} alt={e.categoryName} className="h-6 w-auto rounded-xl" />
              <p >{e.categoryName}</p>

            </span>
          ))}
        </div>
      </section>
      <section>

      </section>
    </main>
  )
}

export default App
