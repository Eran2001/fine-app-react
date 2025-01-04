import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const OfficersLogin = () => {
  const [email, setEmail] = useState("");
  const [batch_number, setBatchNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/officers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, batch_number }),
      });
      if (!response.ok) throw new Error("Invalid credentials");
      const data = await response.json();
      localStorage.setItem("officerToken", data.token);
      navigate("/officer-dashboard");
    } catch (err) {
      // setError("Invalid email or batch number");
      alert("Invalid email or batch number");
      console.error(err);
    }
  };

  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 home">
        Officer Login
      </h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mt-5 mb-2 text-gray-600 text-sm font-medium">
            Batch Number
          </label>
          <input
            type="password"
            value={batch_number}
            onChange={(e) => setBatchNumber(e.target.value)}
            required
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-52 h-12 shadow-sm rounded-full bg-[#0438e4] hover:bg-[#070250] transition-all duration-700 text-white text-base font-semibold leading-7 mx-auto block"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default OfficersLogin;
