import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Registerform = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await axios.post('http://localhost:5000/api/users/register', {
            username,
            email,
            password
         });

         console.log('Registration successful:', response.data);
      } catch (err) {
         console.log('Registration failed:', err.response.data);
      }
   };

   return (
      <div className="flex flex-col h-screen ">
         <h1 className="font-bold text-2xl text-nowrap">Create an Account</h1>
         <h6 className="font-semibold mt-2 text-nowrap">Kindly fill your details to become a part of us</h6>

         <form className="flex flex-col mt-14">
            <label className="text-black font-300">Your Full Name</label>
            <input
               type="text"
               placeholder="Enter your name"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"
            />
            <label className="text-black font-300" htmlFor="email">Your Email Address</label>
            <input
               type="email"
               id="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"
            />
            <label className="text-black font-300" htmlFor="password">Create Password</label>
            <input
               type="password"
               id="password"
               required={true}
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"
            />

            <button type="submit" className="px-4 py-2 text-white mt-4 text-center bg-green-500 rounded-md">Register</button>

            <div className="flex gap-40 mt-2">
               <h6>Already have an account?</h6>
               <Link to="/signin" className="text-blue-500 hover:underline">Sign in</Link>
            </div>
         </form>
      </div>
   );
};

export default Registerform;
