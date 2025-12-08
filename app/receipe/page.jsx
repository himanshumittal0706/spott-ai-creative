"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AllUserPage() {
    const [receipe, setReceipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchItem, setSearchItem] = useState("");

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchItem(query);

        if (!query.trim()) {
            fetchAllUsers();   //If search is empty, fetch all recipes
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://dummyjson.com/recipes/search?q=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setReceipe(result.recipes || []);
            console.log("Search results:==", result.recipes);
        } catch (err) {
            console.error("Error searching recipes:", err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("https://dummyjson.com/recipes");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            setReceipe(result.recipes);

            console.log("Fetched recipes:", result.recipes);
        } catch (err) {
            console.error("Error fetching all users:", err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchAllUsers() }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">All Recipes</h1>

            <div className="mb-6">
                <input
                    value={searchItem}
                    onChange={handleSearch}
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search recipes..."
                />
            </div>

            {loading && <div className="text-center py-8">Loading Recipes😋</div>}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Error: {error}
                </div>
            )}

            {!loading && !error && receipe.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    {searchItem ? "No recipes found matching your search" : "No recipes found"}
                </div>
            )}

            {!loading && !error && receipe.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {receipe.map((recipe) => (
                        <div key={recipe.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                            <Link href={`/receipe/${recipe.id}`}>
                                <h2 className="text-lg font-semibold hover:underline cursor-pointer">
                                    {recipe.name}
                                </h2>
                            </Link>
                            {recipe.cuisine && <p className="text-sm">Difficulty: {recipe.difficulty}</p>}
                            {recipe.cuisine && <p className="text-sm">Cuisine: {recipe.cuisine}</p>}
                            {recipe.difficulty && <p className="text-sm">Difficulty: {recipe.difficulty}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}




