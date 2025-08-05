import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { loginUser } from '../../../../../BackEnd/utils/api';
import { loginUser } from '../../../api/api';
import  LoginVortex  from "../../ui/LoginVortex";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate(`/home/${response.user.id}`);
      } else {
        setError(response.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      {/* ✅ Background Vortex Layer */}
      <div className="absolute inset-0 z-0">
        <LoginVortex
          backgroundColor="black"
          rangeY={800}
          particleCount={30}
          baseHue={200}
          className="w-full h-full"
        />
      </div>

      {/* ✅ Foreground Login Card */}
      <div className="relative z-10 w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Welcome to SpendSense
          </h5>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>

          <div className="text-sm font-medium text-gray-500">
            Not registered?{' '}
            <Link to="/signup" className="text-blue-700 hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
