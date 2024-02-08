import React, { useState } from "react";
import { Input, Textarea, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export default function CreateBlog({ loggedUser }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [genre, setGenre] = useState('');
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/blogs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content, genre, loggedUser }),
                mode: "cors",
            });
            const data = await response.json();
            console.log(data.message);
            navigate('/blogs');
            // Clear form fields after successful submission
            setTitle('');
            setContent('');
            setGenre('');

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <main className="m-16 font-mono">
            <form onSubmit={handleCreate} className="bg-gray-100 px-8 py-16">
                <p className="text-center text-2xl font-semibold font-playfair pb-4">Create Blog</p>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xl">Title</label>
                    <Input  value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" type="text" required />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="content" className="text-xl">Content</label>
                    <Textarea  value={content} onChange={(e) => setContent(e.target.value)} id="content" name="content" required />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="genre" className="text-xl">Genre</label>
                    <Input  value={genre} onChange={(e) => setGenre(e.target.value)} name="genre" id="genre" type="text" />
                </div>
                <button type="submit" className="bg-slate-700 w-full border-2 mt-4 hover:bg-slate-500 transition-all text-sm text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline">
                    Create Blog
                </button>
            </form>
        </main>
    );
}
