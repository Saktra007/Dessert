import React from "react";
import desserts from "../data/desserts";
const FilterBar = ({ search, setSearch, category, setCategory }) => {
  const Category = ["All", ...new Set(desserts.map((p) => p.category))];
  return (
    <div className="bg-slate-100 p-6">
      <div className="flex bg-white p-4 max-md:flex-col rounded-xl">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search desserts...."
          className="rounded-3xl focus:ring-4 ring-cyan-300 border-2 max-md:mb-5 md:w-2/3 bg-white h-10 pl-3"
        />
        <div className="flex justify-between md:ml-2 md:w-1/3 ">
          {Category.map((cate) => (
            <button
              onClick={() => setCategory(cate)}
              className={`border-2 mx-1 max-md: max-xl:text-xs rounded-3xl w-28 h-10 ${
                category === cate
                  ? "bg-cyan-300 underline ring border-indigo-600 underline-offset-2 decoration-2"
                  : "bg-orange-100"
              }`}
              key={cate}
            >
              {cate}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
