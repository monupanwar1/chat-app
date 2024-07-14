import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signinform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log('Login successful:', res.data);
      navigate('/home'); // Navigate to the home page on successful login
    } catch (err) {
      console.log('Login failed:', err.response?.data);
      setError(err.response?.data?.msg || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen mt-60 p-4">
      <h1 className="font-bold text-2xl text-nowrap">Login Here</h1>
      <h6 className="font-semibold mt-2 text-nowrap">Kindly fill your details to become a part of us</h6>

      <form className="flex flex-col mt-14" onSubmit={handleSubmit}>
        <label className="text-black font-300" htmlFor="email">Your Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"
        />

        <label className="text-black font-300" htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="placeholder:text-white/ outline-none rounded-md h-10 bg-slate-300"
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button type="submit" className="px-4 py-2 text-white mt-4 text-center bg-green-500 items-center rounded-md">Sign In</button>

        <div className="flex gap-40 mt-4">
          <h6>New Register</h6>
          <Link to="/" className="text-blue-500 hover:underline">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
