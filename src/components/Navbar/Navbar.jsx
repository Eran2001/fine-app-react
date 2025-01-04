import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) => {
    return `cursor-pointer px-4 py-2 rounded ${
      isActive(path) ? "text-[#00e3dc]" : "text-white"
    } hover:text-[#00e3dc] transition-colors duration-300`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-1 fixed w-full left-0 right-0 top-0 flex justify-around items-center transition-colors duration-300 z-[60]`}
      style={{
        backgroundColor: isScrolled ? "#070250" : "#070250",
        height: "4rem",
      }}
    >
      <div
        className="text-[#fff] font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.png" width="40px" alt="" />
      </div>
      <div className="flex space-x-10">
        <div
          className={`cursor-pointer pl-40 ${
            isActive("/") ? "text-white-500 font-bold underline" : "text-[white]"
          } ${getLinkClasses("/")}`}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className={`cursor-pointer ${
            isActive("/services")
              ? "text-white-500 font-bold underline"
              : "text-white"
          } ${getLinkClasses("/services")}`}
          onClick={() => navigate("/services")}
        >
          Services
        </div>
        <div
          className={`cursor-pointer ${
            isActive("/about") ? "font-bold underline" : "text-white"
          } ${getLinkClasses("/about")}`}
          onClick={() => navigate("/about")}
        >
          About
        </div>
        <div
          className={`cursor-pointer ${
            isActive("/contact")
              ? "text-white-500 font-bold underline"
              : "text-white"
          } ${getLinkClasses("/contact")}`}
          onClick={() => navigate("/contact")}
        >
          Contact
        </div>
        <div
          className={`cursor-pointer ${
            isActive("/officers")
              ? "text-white-500 font-bold underline"
              : "text-white"
          } ${getLinkClasses("/officers")}`}
          onClick={() => navigate("/officers")}
        >
          Officers
        </div>
        <div
          className={`cursor-pointer ${
            isActive("/post-offices")
              ? "text-white-500 font-bold underline"
              : "text-white"
          } ${getLinkClasses("/post-offices")}`}
          onClick={() => navigate("/post-offices")}
        >
          Post Offices
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          className={`bg-[#070250] text-white login-reg border-2 border-white px-10 py-1 rounded transition-all duration-300 w-32 hover:text-[#00e3dc] hover:border-[#00e3dc] ${
            isScrolled ? "border-2 border-orange-500" : ""
          }`}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="reg bg-[#00e3dc] text-[#070250] login-reg px-10 py-1 rounded w-32 hover:text-white hover:bg-[#070250] hover:border-[#00e3dc] border-2 border-[white]] transition-all duration-300"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
