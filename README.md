# MERN Blogging App

## Overview

This is a full-stack blogging application built using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. The app allows users to create, edit, and delete their blogs. It also provides user management functionalities, including signup, login, and user deletion. Users can browse through all blogs, view individual blog posts, and leave comments on them.

[![My Skills](https://skillicons.dev/icons?i=html,tailwind,mongodb,express,react,node)](https://skillicons.dev)

## Live Preview
[Go to Youtube](https://youtu.be/CvYHiHCe7gI)



## Features

- **User Authentication**: Users can sign up and log in securely to manage their blogs.
- **Blog Management**: Users can create, edit, and delete their blogs.
- **User Management**: Admins can view all users and delete users if necessary.
- **Blog Viewing**: Users can browse through all blogs and view individual blog posts.
- **Commenting System**: Users can leave comments on blog posts.

## Tech Stack

- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js and Express.js for building the server and API.
- **Database**: MongoDB for storing user data, blog posts, and comments.
- **Authentication**: PassportJS for authenticating and hashing user logins and signup.

## Setup

1. Clone the repository: `git clone https://github.com/abdullahamin231/mern-blogging-app.git`
2. Navigate to the project directory: `cd mern-blogging-app`
3. Install dependencies:
   - For the backend, navigate to the `backend` directory and run `npm install`.
   - For the frontend, navigate to the `frontend` directory and run `npm install`.
4. Start the backend server: In the `backend` directory, run `npm start`.
5. Start the frontend server: In the `frontend` directory, run `npm start`.
6. Access the application at `http://localhost:5137` in your web browser.

## API Endpoints

- **POST /users/signup**: Register a new user.
- **POST /users/login**: Log in an existing user.
- **GET /blogs**: Get all blogs.
- **GET /blogs/:id**: Get a specific blog by ID.
- **POST /blogs/create**: Create a new blog.
- **PUT /blogs/:id**: Update a blog by ID.
- **DELETE /blogs/:id/delete**: Delete a blog by ID.
- **GET /users**: Get all users (admin only).
- **DELETE /users/:id/delete**: Delete a user by ID (admin only || user themselves).


