import axios from 'axios';
import React from 'react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    const {user} = React.useContext(userContext);
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Optionally redirect or update UI based on successful login
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : error.message;
      setError(errorMessage);
      console.error('Login failed:', errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Teal section with the title and entire login form */}
      <div className="bg-teal-600 flex items-center justify-center flex-1">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-pacifico text-teal-600 text-center mb-6">Employee Management System</h2>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Login</h3>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <a href="#" className="text-sm text-teal-600 hover:text-teal-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* White section below the teal section */}
      <div className="flex-1 bg-white"></div>
    </div>
  );
};

export default Login;