import React from "react";
import { useNavigate } from "react-router-dom";
import mentalHealthImage from "../images/image1.png"; // Adjust the path as needed

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate("/index"); // Navigate to the Index page
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#FDF6F0] px-6">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-6 text-black">
          Unlock a Healthier Mind
        </h1>
        <p className="text-lg text-black mb-8">
          Discover insights, resources, and support tailored to your mental wellness journey.
          Start today for a brighter tomorrow!
        </p>
        <button
          onClick={handleGetStarted} // Attach the click handler
          className="bg-[#FECF4C] hover:bg-[#FFD166] text-black py-3 px-6 rounded-lg font-semibold shadow-lg transition duration-200"
        >
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center -mt-10"> {/* Negative margin added */}
        <img
          src={mentalHealthImage} 
          alt="Mental Wellness"
          className="w-3/4 md:w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
