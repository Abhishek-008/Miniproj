import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalScore, result, disorder } = location.state || {};

  const handleGoHome = () => {
    navigate("/"); // Redirect to home or resource page
  };

  const resources = {
    anxiety: [
      "Breathing exercises",
      "Mindfulness meditation",
      "Cognitive Behavioral Therapy (CBT)",
      "Talk to a counselor or therapist",
    ],
    depression: [
      "Physical activity and exercise",
      "Connect with friends or loved ones",
      "Seek professional counseling",
      "Consider journaling or creative outlets",
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0]">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-[#FECF4C] mb-4">Total Score: {totalScore}</h2>
        <p className="text-2xl font-semibold text-gray-800 mb-6">{result}</p>
        <p className="text-lg text-gray-700 mb-6">
          Based on your score, we recommend the following resources for {disorder}:
        </p>

        <ul className="text-left list-disc list-inside mb-6">
          {resources[disorder]?.map((resource, index) => (
            <li key={index} className="text-lg text-gray-800 mb-2">
              {resource}
            </li>
          ))}
        </ul>

        <button
          onClick={handleGoHome}
          className="bg-[#FECF4C] hover:bg-[#FFD166] text-black font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
