"use client"
import Link from "next/link";
import ItemList from './item-list';
import NewItem from "./new-item";
import itemsFile from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsFile);



    function handleAddItem(obj) {
        setItems([...items, obj])
        alert("Item added...: " + JSON.stringify(obj));
    }

    return (
        <main>
            <h1 className="text-4xl text-center py-4">Shopping List</h1>
            <NewItem handleAddItem={handleAddItem} />
            <ItemList items={items} />
            <Link href={"/"}>Back to Home</Link>
        </main>
    );
}

