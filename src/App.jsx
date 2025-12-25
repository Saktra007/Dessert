import React, { useMemo, useState } from "react";
import DessertCard from "./components/DessertCard";
import desserts from "./data/desserts";
import FilterBar from "./components/FilterBar";
const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filteredDesserts = useMemo(() => {
    return desserts.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesCategory = category === "All" || item.category === category;
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);
  return (
    <div className="min-h-screen bg-red-50">
      <header className="max-w-7xl mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-center border-b-4 pb-5 border-amber-700 text-amber-700 uppercase tracking-widest">
          🍰 Dessert Menu
        </h1>
      </header>
      <main className="max-w-7xl mx-auto px-4">
        <FilterBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-around gap-8 mx-auto py-10">
          {filteredDesserts.length > 0 ? (
            filteredDesserts.map((item) => (
              <DessertCard key={item.id} product={item} />
            ))
          ) : (
            <div className="text-3xl flex flex-col justify-center items-center col-span-full h-64 text-gray-500">
              <span className="text-6xl mb-4">🍩</span>
              <p>No desserts found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
