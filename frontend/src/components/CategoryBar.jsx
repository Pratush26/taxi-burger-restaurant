import { use } from "react";

export default function CategoryBar({ data, handleCategoryClick, active }) {
    let dataSet = use(data);
    return (
        <section className="overflow-x-auto custom-scrollbar pb-2">
            <div className="flex is-center justify-center gap-4 w-max px-8">
                {dataSet.map((e) => (
                    <button
                        onClick={() => handleCategoryClick(e.id)}
                        key={e.id}
                        className={`flex is-center justify-between text-sm font-semibold border-gray-400 gap-3 px-4 py-2 rounded-lg border transition-colors duration-200 cursor-pointer ${active === e.id ? "bg-gray-800 text-white hover:bg-gray-900" : "hover:bg-gray-100"}`}>
                        <img src={e.categoryImg} alt={e.categoryName} className="h-6 w-auto rounded-xl" />
                        <p >{e.categoryName}</p>
                    </button>
                ))}
            </div>
        </section>
    )
}