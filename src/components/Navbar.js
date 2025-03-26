import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-[#FDF6F0] shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold text-black">
          MindMate
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="text-black hover:text-[#FECF4C] transition-colors duration-300">
            Home
          </Link>
          <Link to="/questionnaire" className="text-black hover:text-[#FECF4C] transition-colors duration-300">
            Questionnaire
          </Link>
          <Link to="/resources" className="text-black hover:text-[#FECF4C] transition-colors duration-300">
            Resources
          </Link>
          <Link to="/moodtunes" className="text-black hover:text-[#FECF4C] transition-colors duration-300">
            MoodTunes
          </Link>
          <Link to="/about-us" className="text-black hover:text-[#FECF4C] transition-colors duration-300">
            About Us
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-[#FECF4C] hover:bg-[#FFD166] text-black py-2 px-6 rounded-full font-semibold shadow-md transition duration-300">
          Get Help
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
