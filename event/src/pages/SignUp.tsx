import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUpWithEmail = async () => {
    setError("");
    setIsLoading(true);
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response.user.uid);
          navigate("/home"); 
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          setError(error.message);
        });
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        signUpWithEmail();
      }}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-400 transition duration-200" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>

        {error && (
          <p className="mt-2 text-red-600">{error}</p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
