import React from "react";

function Categories({ category, setCategory, posts }) {
  const categoryHandler = (category) => {
    if (category === " ") {
      setCategory(posts);
    } else {
      let newData = posts.filter((item) => item.category === category);
      setCategory(newData);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto gap-4 mt-4 z-0">
      <button onClick={() => categoryHandler(" ")} className="text-lg font-semibold px-4 py-0.5 border-2 border-slate-950 rounded-lg md:hover:bg-slate-950 md:hover:text-white  transition-all duration-200 ease-in">All</button>
      <button onClick={() => categoryHandler("men's clothing")} className="text-lg font-semibold px-4 py-0.5 border-2 border-slate-950 rounded-lg md:hover:bg-slate-950 md:hover:text-white  transition-all duration-200 ease-in">
        Men's Wear
      </button>
      <button onClick={() => categoryHandler("women's clothing")} className="text-lg font-semibold px-4 py-0.5 border-2 border-slate-950 rounded-lg md:hover:bg-slate-950 md:hover:text-white  transition-all duration-200 ease-in">
        Women's Wear
      </button>
      <button onClick={() => categoryHandler("electronics")} className="text-lg font-semibold px-4 py-0.5 border-2 border-slate-950 rounded-lg md:hover:bg-slate-950 md:hover:text-white  transition-all duration-200 ease-in">
        Electronics
      </button>
    </div>
  );
}

export default Categories;
