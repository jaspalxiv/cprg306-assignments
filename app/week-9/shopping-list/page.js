"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsFile from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsFile);
    const [selectedItem, setSelectedItem] = useState("");
    const { user } = useUserAuth();

    function handleAddItem(obj) {
        setItems([...items, obj]);
    }

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">You must be signed in to view this page.</h1>
                <Link href="/week-9" className="text-blue-500 hover:underline">
                    Go to Home Page
                </Link>
            </div>
        );
    }

    return (
        <main className="flex flex-col md:flex-row min-h-screen">
            <div className="flex-1 p-6 md:pr-70">
                <h1 className="text-4xl text-center py-4">Shopping List</h1>
                <NewItem handleAddItem={handleAddItem} />
                <ItemList items={items} setSelectedItem={setSelectedItem} />
                <Link href="/" className="text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>

            <div className="w-70 p-4 md:static fixed right-4 top-20">
                <MealIdeas ingredient={selectedItem} />
            </div>
        </main>
    );
}
