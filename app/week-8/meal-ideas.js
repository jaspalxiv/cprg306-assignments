"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (!ingredient) return;

        ingredient = ingredient.replace(/[\u{1F300}-\u{1FAD6}]/gu, '') // Remove emojis
            .split(",")[0] // Take first word before comma
            .trimEnd() // Trim spaces
            .replace(/s$/, ''); // Remove trailing 's' if present

        fetchMealIdeas(ingredient).then(response => {
            if (Array.isArray(response)) {
                setMeals(response);
            } else {
                alert(JSON.stringify(response));
            }
        });

    }, [ingredient]);

    return (
        <div className="flex justify-end p-4">
            <div className="w-80 bg-white shadow-lg rounded-lg p-4">
                <h1 className="text-xl font-semibold mb-3 text-black">Meal Ideas</h1>
                <ul className="list-disc list-inside space-y-2">
                    {meals.length > 0 ? (
                        meals.map(meal => (
                            <li key={meal.idMeal} className="text-gray-700">{meal.strMeal}</li>
                        ))
                    ) : (
                        <li className="text-gray-500">No meals found</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

function fetchMealIdeas(ingredient) {
    let link = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;

    return fetch(link)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => data.meals || []) // Ensure an array is returned
        .catch(error => {
            console.error("Fetch error:", error);
            return [];
        });
}
