import React from "react";
import { useNavigate } from "react-router-dom";

const issues = [
  {
    title: "Anxiety",
    description:
      "Understand your anxiety levels and get actionable tips to manage them effectively.",
    disorder: "anxiety", // Changed for dynamic routing
  },
  {
    title: "Depression",
    description:
      "Explore your emotional well-being and discover ways to uplift your mood.",
    disorder: "depression", // Changed for dynamic routing
  },
  {
    title: "Traumatic Stress",
    description:
      "Evaluate how past trauma may be affecting your mental health and find ways to heal.",
    disorder: "trauma", // Changed for dynamic routing
  },
  {
    title: "Bipolar Disorder",
    description:
      "Gain insight into the ups and downs of bipolar disorder with tailored support.",
    disorder: "bipolar", // Changed for dynamic routing
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF6F0] px-6 py-10">
      <h1 className="text-5xl font-extrabold text-black mb-10 text-center">
        Take Your Mental Health Assessment
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {issues.map((issue, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg transition transform hover:scale-105 duration-300"
          >
            <h2 className="text-3xl font-bold text-[#FECF4C] mb-4 text-center">
              {issue.title}
            </h2>
            <p className="text-gray-700 text-lg text-center mb-6">
              {issue.description}
            </p>
            <button
              onClick={() => navigate(`/assessment/${issue.disorder}`)}
              className="block mx-auto bg-[#FECF4C] hover:bg-[#FFD166] text-black py-2 px-4 rounded-lg font-semibold shadow-lg transition duration-300"
            >
              Take Assessment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
