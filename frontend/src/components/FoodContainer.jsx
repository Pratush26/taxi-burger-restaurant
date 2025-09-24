import { use } from "react";

export default function FoodContainer({ data }) {
    let food = use(data);
    return (
        <section id="foodItems" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 pb-8">
        {food.map((i) => (
          <span key={i.id} className="border border-gray-500 rounded-xl flex flex-col justify-between gap-2 pb-3">
            <img loading="lazy" src={i.foodImg} alt={i.title} className="w-full h-auto rounded-xl" />
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
    )
}