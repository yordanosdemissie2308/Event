import React, { useState } from 'react';
import { getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signInWithEmail = async () => {
    setError("");
    setIsLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response.user.uid);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error signing in:", error);
          setError(error.message);
        });
    } catch (error) {
      console.error("Error during sign in:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          signInWithEmail();
        }}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="w-full px-4 py-2 text-white bg-slate-600 rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          
          {error && (
            <p className="mt-2 text-red-600">{error}</p>
          )}
          
          <div className="mt-4 text-center">
            <p>Don't have an account?</p>
          <a href="/signup" className="text-slate-700 hover:text-white">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
