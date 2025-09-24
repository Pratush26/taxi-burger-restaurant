import { useEffect, useState } from "react";
import logImg from "./assets/logo.png"
import NavBar from './components/Navbar'
import './App.css'


function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(null);
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
      .then(res => res.json())
      .then(data => setData(data.categories))
      .catch(err => console.error(err));
  }, []);

let handleCategoryClick = (id) => {
  setActive(id);
  fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories/${id}`)
    .then(res => res.json())
    .then(data => setFood(data.foods))
    .catch(err => console.error(err));
};

  return (
    <main className='space-y-4'>
      <NavBar></NavBar>
      <section id='hero' className='grid grid-rows-2 items-center justify-items-center h-[80vh]'>
        <div className='h-full w-full'></div>
        <img src={logImg} alt="logo" className='h-1/2 object-contain' />
      </section>
      <section className="overflow-x-auto custom-scrollbar pb-2">
        <div className="flex is-center justify-center gap-4 w-max px-8">
          {data.map((e) => (
            <button onClick={() => handleCategoryClick(e.id)} key={e.id} className={`flex is-center justify-between text-sm font-semibold border-gray-400 gap-3 px-4 py-2 rounded-lg border transition-colors duration-200 cursor-pointer ${active === e.id ? "bg-gray-800 text-white hover:bg-gray-900" : "hover:bg-gray-100"}`}>
              <img src={e.categoryImg} alt={e.categoryName} className="h-6 w-auto rounded-xl" />
              <p >{e.categoryName}</p>

            </button>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 pb-8">
          {food.map((i) => (
            <span key={i.id} className="border border-gray-500 rounded-xl flex flex-col justify-between gap-2 pb-3">
              <img src={i.foodImg} alt={i.title} className="w-full h-auto rounded-xl" />
              <div className="px-3 text-gray-800 space-y-1">
              <p className="text-xl font-semibold">{i.title}</p>
              <p className="text-gray-700">Price: ${i.price}</p>
              </div>
              <div className="flex items-center justify-between px-3 gap-2">
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </span>
          ))}
      </section>
    </main>
  )
}

export default App


// catId
// : 
// 7
// category
// : 
// "Pork"
// foodImg
// : 
// "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg"
// id
// : 
// 52926
// price
// : 
// 646
// title
// : 
// "Tourtiere"