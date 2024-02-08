import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'

import cta from "../assets/cta-img.png";


export default function Blog({loggedUser}){
    const [blogs, setBlogs] = useState([]);
    const fetchBlogs = async () => {
        const response = await fetch('http://localhost:3000/blogs');
        const data = await response.json();
        setBlogs(data.blogs);  
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <main>
            <div id="allBlogs" className="grid grid-cols-2 gap-4 justify-center m-16 font-mono border-b-2 pb-16">
                {
                    blogs.length === 0 ? <div className="flex flex-col text-left"> 
                    <h1 className="text-4xl font-bold">No blogs available</h1>
                    {
                        loggedUser && loggedUser.username ? <Link to="/blogs/create" className="text-xl px-4 py-2 mt-2 text-slate-500 hover:underline">Create a blog</Link> : <p className="text-md text-slate-800 py-2 mt-2">Login to write your own blogs</p>
                    }
                    </div> : ''
                }
                
                {
                    blogs.map((blog, index) => {
                        return (
                            <div key={index} className="blog bg-slate-100 p-2 rounded-md">
                                <Link to={`/blogs/${blog._id}`} className="text-l font-bold">{blog.title} </Link>
                            </div>
                        )
                    })
                    
                }
                
            </div>    
            {
                    loggedUser && loggedUser.username ? <Link to="/blogs/create" className="text-xl  ml-16 font-mono px-4 py-2 bg-slate-700 mt-2 text-slate-100  hover:bg-slate-500">Write your blog</Link> : <p className="text-md font-playfair ml-16 text-slate-800 py-2 mt-2">Login to write your own blogs</p>
            }
            <div id="cta" className=" flex flex-row items-center justify-center gap-5 border-b-2">
                <img className="max-w-[500px]" src={cta} alt="" />
                <div className="flex flex-col text-left">
                    <h1 className="text-2xl font-mono font-bold text-black">Ready to start your journey?</h1>
                    <p className="text-md text-black font-mono break-words">Check out our very own test authoring suite! This suite allows you to create, edit, and preview posts in this blog!</p>
                    <Link to="/blogs/create" className="text-md px-4 py-1 mt-4 border-2 border-slate-500 font-mono text-black w-fit  hover:bg-black hover:text-white hover:transition-all hover:duration-250ms">Go to Link</Link>
                </div>
            </div>    
            <div className="flex flex-col items-center justify-center mt-8 mb-16">
                <p className="text-4xl font-playfair mb-2 px-4 py-1">The Odyssey Community</p>
                <p className="text-md font-mono mb-2 px-4 py-1">Follow us on all our socials!</p>
                <div className="flex flex-row items-center gap-2">
                    <SocialIcon bgColor="black" url="https://twitter.com" />
                    <SocialIcon bgColor="black" url="https://facebook.com" />
                    <SocialIcon bgColor="black" url="https://youtube.com" />
                    <SocialIcon bgColor="black" url="https://instagram.com" />
                    <SocialIcon bgColor="black" url="https://linkedin.com" />
                </div>
            </div>         
        </main>
    )
}
