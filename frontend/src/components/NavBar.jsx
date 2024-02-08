import * as React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ loggedUser }) {
    return (
        <nav className="mx-auto mb-2 pt-2 text-center bg-gray-100 text-slate-900 rounded-b-2xl font-mono gap-1">

            <div className="flex-grow text-center" >
                <Link
                  className="text-5xl font-playfair font-bold"
                  to="/blogs"
                >
                  ODYSSEY
                </Link>
            </div>

            <div className="mt-4">
                <Link   className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/blogs">Blogs</Link>
                <Link   className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/users">Users</Link>
                {
                    loggedUser && loggedUser.username ? 
                    <Link className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/users">{loggedUser.username}</Link> : 
                        <Link className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/users/login">Log In</Link>
                }
                <Link   className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/users/signup">Sign Up</Link>
                <Link   className="bg-slate-500 px-4 py-2 rounded-sm text-white font-400 font-poppins ml-3 hover:bg-slate-700 transition duration-250ms"
                        to="/users/logout">Log Out</Link>
            </div>
        </nav>
    );
}
