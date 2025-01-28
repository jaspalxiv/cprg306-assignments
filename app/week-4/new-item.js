"use client";

import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        setQuantity(quantity + 1);

    }

    function decrease() {
        setQuantity(quantity - 1);

    }
    return (
        <div>

            <p>Quantity is :
                <button onClick={decrease} className="bg-cyan-500 text-black border rounded px-2 mx-2 hover:bg-blue-500 disabled:bg-gray-500" disabled={quantity == 1}>-</button>
                {quantity}
                <button onClick={increase} className="bg-cyan-500 text-black border rounded px-2 mx-2 hover:bg-blue-500 disabled:bg-gray-500" disabled={quantity == 20}>+</button>
            </p>


        </div>
    )
}

