import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUnlock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contextAPI/UserContext";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ userAuth, setUserAuth ] = useAuth();

  const [type, setType] = useState(true); // Toggles password visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logIn = async (e) => {
    e.preventDefault();

    // Reset error state and validate inputs
    setError(null);
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = {
          user: response.data.user,
          token: response.data.token,
        };
        setUserAuth(userData);
        localStorage.setItem("auth", JSON.stringify(userData));
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-black">
      <form
        onSubmit={logIn}
        className="max-w-md w-full p-6 bg-white rounded-md shadow-md"
      >
        {/* Logo */}
        <div className="w-full bg-black py-2 mb-4 rounded-md flex justify-center box-border px-4">
          <h1 className="text-2xl font-semibold">
            <span className="text-yellow-500">Conscientious</span>
            <span className="text-white ml-2">Technologies</span>
          </h1>
        </div>

        {/* Email Input */}
        <div className="mb-4 relative">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md py-2 px-3 pl-10 focus:outline-none focus:border-blue-500"
              required
            />
            <FaEnvelope className="icon absolute top-2 right-3 text-teal-500" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6 relative">
          <div className="relative">
            <input
              type={type ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md py-2 px-3 pl-10 focus:outline-none focus:border-blue-500"
              required
            />
            {type ? (
              <FaLock
                className="icon absolute top-2 right-3 cursor-pointer text-teal-500"
                onClick={() => setType(!type)}
              />
            ) : (
              <FaUnlock
                className="icon absolute top-2 right-3 cursor-pointer text-teal-500"
                onClick={() => setType(!type)}
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 font-semibold"
          disabled={loading}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
