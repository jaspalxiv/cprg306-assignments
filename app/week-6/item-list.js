"use client";

import { useState } from "react";
import items from "./items.json";
import Item from "./item";
export default function loadList() {


  const [sortBy, setSortBy] = useState("name");

  const sortedItems = items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className= "w-full max-w-md mx-auto">
        <label >Sort By: </label>
        <button className="bg-orange-500 p-1 m-2 w-28" onClick={() => setSortBy("name")}>Sort by Name</button>
        <button className="bg-orange-500 p-1 m-2 w-60" onClick={() => setSortBy("category")}>Sort by Category</button>

      </div>
      <div className="w-full max-w-md mx-auto">
        {sortedItems.map((item, index) => (
          <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>

  )
}


