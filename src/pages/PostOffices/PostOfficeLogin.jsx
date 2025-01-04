import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const PostOfficeLogin = () => {
  const [post_office_name, setPostOfficeName] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/post-office-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post_office_name, postal_code }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Token:", data.token);
        navigate("/post-office-dashboard");
      } else {
        console.error("Error:", data.message);
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 mb-10 home">
        Post Office Login
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium" htmlFor="post_office_name">
            Post Office Name
          </label>
          <input
            type="text"
            id="post_office_name"
            value={post_office_name}
            onChange={(e) => setPostOfficeName(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium" htmlFor="postal_code">
            Postal Code
          </label>
          <input
            type="text"
            id="postal_code"
            value={postal_code}
            onChange={(e) => setPostalCode(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-52 h-12 shadow-sm rounded-full bg-[#0438e4] hover:bg-[#070250] transition-all duration-700 text-white text-base font-semibold leading-7 mx-auto block"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostOfficeLogin;