import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated login logic (replace with your API later)
    if (email && password) {
      alert('Login successful!');
      navigate('/'); // Redirect to homepage
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4 ">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md w-full text-white">
      <p className="text-4xl font-bold text-white text-center mb-5">
              Sweet<span className="text-pink-500">Life</span>™
            </p>
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">Welcome Back 🎬</h2>
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 transition-colors font-bold rounded"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Don’t have an account?{' '}
          <Link to="/SignUp" className="text-pink-400 hover:underline">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}
