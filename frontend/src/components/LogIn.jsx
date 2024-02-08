import React, { useState } from "react";
const url = "http://localhost:3000/users/login";
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PasswordInput({setPassword}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md' className="mt-2">
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
}

export default function LogIn({setLog}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                mode: "cors",
            });
            // Assuming you want to redirect only if login is successful
            if (response.ok) {
                const data = await response.json();
                setLog(data.user);
                setName(data.user.username);
                setLoading(false);
                navigate('/blogs');
                console.log("Success:", data.user);
            } else {
                // Handle login failure
                setError("Login failed, email/password is incorrect");
                setEmail('');
                setPassword('');
                
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Container maxW='70%' className=" text-center mt-8 p-8 font-mono">
            <p className="font-mono">Welcome back to Odyssey!</p>
            <p className="font-mono">By continuing, you agree to our <span className="text-yellow-600 hover:underline cursor-pointer">User Agreement</span> and <span className="text-yellow-600 hover:underline cursor-pointer">Privacy Policy</span>.</p>
            <div>
                <form onSubmit={handleSubmit} action="/users/login" method="POST">
                    <div className="text-left text-m  p-0 mt-8">
                        <Input

                            placeholder='Enter email'
                            type="email"
                            name="email"
                            value={email}
                            className="mt-1 "
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* 
                        <input 
                            type="text" 
                            name="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /> */}
                    </div>
                    <div className="text-left text-m  p-0 mt-4">
                        <PasswordInput setPassword={setPassword}/>
                        {/* 
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        /> */}
                    </div>
                    <input type="submit" value="Log In" className="border-none bg-slate-800 text-white font-playfair font-semibold py-2 px-4 w-full mt-8 hover cursor-pointer " />
                </form>
                <p className="mt-4 text-left">Don't have an account yet? <span className="text-yellow-600 hover:underline cursor-pointer"> <Link to={'/users/signup'}>Sign Up here</Link> </span> </p>
            </div>
            {
                error && 
                <p className="text-red-500 text-center p-2 m-4 font-bold">{error}</p>
            
            }
            {
                name && 
                <p className="text-center p-2 m-4 font-bold">You are now successfully logged in as {name}</p>   
            }
        </Container>
    );
}
