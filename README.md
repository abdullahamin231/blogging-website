# MERN Blogging App

## Overview

This is a full-stack blogging application built using the MERN stack, comprising MongoDB, Express.js, React.js, and Node.js. The app allows users to create, edit, and delete their blogs. It also provides user management functionalities, including signup, login, and user deletion. Users can browse through all blogs, view individual blog posts, and leave comments on them.

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
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication.

## Setup

1. Clone the repository: `git clone https://github.com/your-username/mern-blogging-app.git`
2. Navigate to the project directory: `cd mern-blogging-app`
3. Install dependencies:
   - For the backend, navigate to the `backend` directory and run `npm install`.
   - For the frontend, navigate to the `frontend` directory and run `npm install`.
4. Configure environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables to the `.env` file:
     ```
     PORT=3001
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```
5. Start the backend server: In the `backend` directory, run `npm start`.
6. Start the frontend server: In the `frontend` directory, run `npm start`.
7. Access the application at `http://localhost:3000` in your web browser.

## API Endpoints

- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **GET /api/blogs**: Get all blogs.
- **GET /api/blogs/:id**: Get a specific blog by ID.
- **POST /api/blogs**: Create a new blog.
- **PUT /api/blogs/:id**: Update a blog by ID.
- **DELETE /api/blogs/:id**: Delete a blog by ID.
- **GET /api/users**: Get all users (admin only).
- **DELETE /api/users/:id**: Delete a user by ID (admin only).

## Folder Structure

