import ItemL from "./item-list"


export default function Item() {
    return (
        <div className="w-full">
            {ItemL.map(function (item, index) {
                return (
                    <div key={index}>
                        <h2 className="text-2xl font-bold text-left">{item.name}</h2>
                        <ul>
                            <li className="p-2 m-2">Quantity: {item.quantity}</li>
                            <li className="p-2 m-2">Category: {item.category}</li>
                        </ul>
                    </div>
                );
            })}
        </div>

    );
}


