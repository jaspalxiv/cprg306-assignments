export default function Item({ name, quantity, category }) {
    return (
        <div className="bg-gray-400 m-2 p-4 text-black rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-left">{name}</h2>
            <ul className="w-full">
                <li className="p-2 my-1 bg-gray-300 rounded-md">Quantity: {quantity}</li>
                <li className="p-2 my-1 bg-gray-300 rounded-md">Category: {category}</li>
            </ul>
        </div>
    );
}

