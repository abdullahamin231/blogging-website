import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function PasswordInput({setPassword}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
          name="password"
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
}

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://www.localhost:3000/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
                mode: "cors",
            });
            const data = await response.json();
            console.log(data.message);
            setMsg(data.message);
            navigate('/users/login');
            // Handle response as needed
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Container maxW='70%' className=" text-center mt-8 p-8 font-mono">
            <p className="font-mono">Welcome back to Odyssey!</p>
            <p className="font-mono">By continuing, you agree to our <span className="text-yellow-600 hover:underline cursor-pointer">User Agreement</span> and <span className="text-yellow-600 hover:underline cursor-pointer">Privacy Policy</span>.</p>
            <form className="text-left mt-8" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <Input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mb-2"
                />

                <label htmlFor="email">Email</label>
                <Input
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-2"
                />

                <label htmlFor="password">Password</label>
                <PasswordInput setPassword={setPassword} />
                <input type="submit" value="Sign Up" className="border-none bg-slate-800 text-white font-playfair font-semibold py-2 px-4 w-full mt-8 hover cursor-pointer " />
                {
                    msg && 
                        <p className="mt-4">{msg}, <span className="text-yellow-600 hover:underline cursor-pointer"> <Link to={"/blogs"}>care to read some blogs?</Link> </span></p>
                }
            </form>
        </Container>
    
    );
}
