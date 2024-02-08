import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Users from "./components/Users";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar';
import CreateBlog from "./components/CreateBlog";
import Footer from './components/Footer';
import BlogItem from "./components/BlogItem";

const RouterApp = () => {
    const [loggedUser, setLoggedUser] = useState({});

    return (
        <Router>
            <div className="mx-40 h-[100vh]">
                <NavBar loggedUser={loggedUser}/>
                <Routes >
                    <Route path="/" element={<Blog />} />
                    <Route path="/blogs" element={<Blog loggedUser={loggedUser}/>} />
                    <Route path="/blogs/:id" element={<BlogItem loggedUser={loggedUser} /> } />
                    <Route path="/blogs/create" element={<CreateBlog loggedUser={loggedUser} /> } />
                    
                    <Route path="/users" element={<Users loggedUser={loggedUser} />} />
                    <Route path="/users/login" element={<LogIn setLog={setLoggedUser} />} />
                    <Route path="/users/signup" element={<SignUp />} />
                    <Route path="/users/logout" element={<LogOut setLog={setLoggedUser}/>} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default RouterApp;
