import { useState, Suspense } from "react";
import logImg from "./assets/logo.png"
import NavBar from './components/Navbar'
import CategoryBar from './components/CategoryBar'
import './App.css'
import FoodContainer from "./components/FoodContainer";

const dataSet = async () => {
  const res = await (await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)).json();
  return res.categories;
}
let data = dataSet();

let changeCategory = async (id) => {
  const res = await (await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/categories/${id}`)).json();
  return res.foods;
};
let firstLoad = async () => {
  const res = await (await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/random`)).json();
  return res.foods;
}
function App() {
  const [active, setActive] = useState(null);
  const [food, setFood] = useState(firstLoad);
  let handleCategoryClick = (id) => {
    let d = changeCategory(id);
    setFood(d);
    setActive(id);
  }

  return (
    <main className='space-y-4'>
      <NavBar />
      <section id='hero' className='grid grid-rows-2 items-center justify-items-center h-[80vh]'>
        <div className='h-full w-full'></div>
        <img src={logImg} alt="logo" className='h-1/2 object-contain' />
      </section>
      <Suspense fallback={<div className="text-center animate-pulse">Loading categories...</div>}>
        <CategoryBar data={data} handleCategoryClick={handleCategoryClick} active={active} />
      </Suspense>
      <Suspense fallback={<div className="text-center animate-pulse min-h-screen pt-8">Loading Food items...</div>}>
        <FoodContainer data={food} />
      </Suspense>
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