import { useEffect, useState } from "react";
import React from "react";
import { useParams } from 'react-router-dom';
import { useDisclosure, Button } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function BasicUsage({ id, loggedUser }) {
    const [comment_title, setTitle] = useState('');
    const [comment_content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://www.localhost:3000/blogs/${id}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment_title, comment_content, loggedUser }),
                mode: "cors",
            });
            const data = await response.json();
            console.log(data.message);
            // Handle response as needed
        } catch (error) {
            console.error("Error:", error);
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Add Comment</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Write your comment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form  onSubmit={handleSubmit} action={`/blogs/${id}/comments`} method="post">
                            <div className="mb-4">
                                <label htmlFor="comment_title" className="block text-gray-700 text-sm font-bold mb-2">Comment Title</label>
                                <input onChange={ (e) => setTitle(e.target.value)} type="text" id="comment_title" name="comment_title" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="comment_content" className="block text-gray-700 text-sm font-bold mb-2">Comment Content</label>
                                <textarea  onChange={ (e) => setContent(e.target.value)} id="comment_content" name="comment_content" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={onClose} type="submit" className="bg-slate-500 w-full hover:bg-slate-400 transition-all text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline">
                                    Add Comment
                                </button>
                            </div>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const BlogItem = ({ loggedUser }) => {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([{}]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:3000/blogs/${id}`, { mode: 'cors' });
            const data = await response.json();
            setBlog(data.blog);
            console.log(data.blog);
            setComments(data.comments);
        }
        fetchBlog();
    }, [id]);

    const handleDeletion = async (event, cid) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}/comments/${cid}/delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
            });
            const data = await response.json();
            console.log(data.message);
            navigate(`/blogs/${id}`);
            // Handle response as needed
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <main className="m-16 font-mono pb-8">
            <div className="blog bg-slate-200 px-4 py-8 rounded-md">
                <h1 className="text-4xl font-bold">{blog.title}</h1>
                <p className="text-xl">{blog.content}</p>
                
            </div>
            <p className="text-xl text-slate-500 mt-4">Comments</p>
            <div>
                {
                    comments &&
                    comments.map((comment) => {
                        return (    
                            <>
                            <div key={comment._id} className="comment bg-slate-100 border-b-2 pb-4 px-4 pt-2">
                                <h1 className="text-2xl font-bold">{comment.comment_title}</h1>
                                <p className="text-xl">{comment.comment_content}</p>
                                {
                                    comment.comment_author ? <p className="text-xl">By: {comment.comment_author.username}</p> : ''
                                }
                                {
                                    (comment.comment_author && comment.comment_author.username === loggedUser.username) || loggedUser.username === 'admin' ?
                                    <form onSubmit={() => handleDeletion(comment._id)} action={`/blogs/${id}/comments/${comment._id}/delete`} method="post">
                                        <button type="submit" className="bg-slate-500 w-fit mt-2 hover:bg-slate-400 transition-all text-sm text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline">
                                            Delete Comment
                                        </button>
                                    </form> : ''
                                }
                            </div>
                            </>
                        )
                    })

                }
                {
                    comments.length === 0 && <p className="p-4 text-bold mt-4">No comments yet</p>
                }
                {
                    loggedUser && loggedUser.username &&
                    <div className="my-4">
                        <BasicUsage id={id} loggedUser={loggedUser} />
                    </div >

                }
            </div>
        </main>
    );
}

export default BlogItem;
