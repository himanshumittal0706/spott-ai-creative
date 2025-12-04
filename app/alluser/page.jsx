"use client";

import { useEffect, useState } from "react";

export default function AllUserPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllUsers = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("https://dummyjson.com/recipes");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            // const usersArray = Array.isArray(result)
            //     ? result
            //     : result?.data || [];

            setAllUsers(result.recipes);

            console.log("Fetched users:", setAllUsers);
        } catch (err) {
            console.error("Error fetching all users:", err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h6 className="text-3xl font-bold mb-6">All Recipes</h6>

            {loading && <div className="text-center py-8">Loading Recipes😋</div>}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Error: {error}
                </div>
            )}

            {!loading && !error && allUsers.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No users found
                </div>
            )}

            {!loading && !error && allUsers.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allUsers.map((user) => (
                        <div key={user.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                            <h2 className="text-lg font-semibold">
                                {user.name}
                            </h2>
                            {/* <p className="text-gray-600">
                                {user.clientName}
                            </p> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}







