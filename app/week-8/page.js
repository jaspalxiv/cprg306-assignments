"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsFile from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsFile);
    const [selectedItem, setSelectedItem] = useState("");

    function handleAddItem(obj) {
        setItems([...items, obj]);
    }

    return (
        <main className="flex flex-col md:flex-row min-h-screen">
            <div className="flex-1 p-6 md:pr-70">
                <h1 className="text-4xl text-center py-4">Shopping List</h1>
                <NewItem handleAddItem={handleAddItem} />
                <ItemList items={items} setSelectedItem={setSelectedItem} />
                <Link href={"/"} className="text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>

            <div className="w-70 p-4 md:static fixed right-4 top-20">
                <MealIdeas ingredient={selectedItem} />
            </div>
        </main>
    );
}
