import { useEffect } from "react";
import { useState } from "react";
import React from "react";


export default function Users({loggedUser}) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/users', {mode:'cors'});           
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}/delete`, {mode:'cors', method: 'POST'}); // Specify method DELETE
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            const data = await response.json();
            console.log(data.message);
            fetchUsers(); // Fetch users again after deletion
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <main className="font-mono text-center mt-16">
                <h1 className="font-bold text-4xl">Users</h1>
                <div className="flex flex-row flex-wrap" >
                    {
                        users.map(user => (
                            <div className="flex flex-col p-4 items-start justify-center bg-gray-200 m-4 w-fit" key={user._id}>
                                <h2 className=" font-bold ">{user.username}</h2>
                                <p>{user.email}</p>
                                {
                                    user &&
                                        user.username === loggedUser.username ? <p>You are signed in {loggedUser.username} and wrote this one G</p> : ''
                                }
                                {
                                    loggedUser && 
                                    loggedUser.username === 'admin' ? 
                                        <form onSubmit={(e) => { e.preventDefault(); handleDelete(user._id); }}> {/* Prevent default form submission and call handleDelete */}
                                            <button type="submit" className="border-none bg-slate-600 text-white font-playfair font-semibold py-2 px-4 w-20 mt-8 hover cursor-pointer ">Delete</button>
                                        </form>
                                    : ''
                                }
                                {
                                    user && loggedUser && 
                                    user.username === loggedUser.username ? 
                                    <form onSubmit={(e) => { e.preventDefault(); handleDelete(user._id); }}> {/* Prevent default form submission and call handleDelete */}
                                            <button type="submit" className="border-none bg-slate-600 text-white font-playfair font-semibold py-2 px-4 w-20 mt-8 hover cursor-pointer ">Delete</button>
                                        </form> : ''
                                }
                            </div>
                        ))
                    }
                </div>
            </main>
        </>
    )
}
