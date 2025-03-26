import React from "react";
import { useParams } from "react-router-dom";

const questionData = {
  anxiety: [
    {
      question: "Feeling nervous, anxious, or on edge",
      options: [0, 1, 2, 3],
    },
    {
      question: "Not being able to stop or control worrying",
      options: [0, 1, 2, 3],
    },
    // More questions...
  ],
  depression: [
    {
      question: "Little interest or pleasure in doing things",
      options: [0, 1, 2, 3],
    },
    // More questions...
  ],
  trauma: [
    {
      question: "Repeated, disturbing memories, thoughts, or images",
      options: [0, 1, 2, 3],
    },
    // More questions...
  ],
  bipolar: [
    {
      question: "Periods of feeling unusually cheerful or high",
      options: [0, 1, 2, 3],
    },
    // More questions...
  ],
};

const CommonAssessment = () => {
  const { disorder } = useParams(); // Fetch disorder from the URL

  // Get the questions for the selected disorder
  const questions = questionData[disorder] || [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF6F0] px-6 py-10">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        {disorder.charAt(0).toUpperCase() + disorder.slice(1)} Assessment
      </h1>

      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {questions.length > 0 ? (
          questions.map((item, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg font-semibold mb-4">{item.question}</p>
              <div className="flex gap-4">
                {item.options.map((option, idx) => (
                  <label key={idx} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question_${index}`}
                      value={option}
                      className="form-radio"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No questions available.</p>
        )}
        <button className="mt-6 bg-[#FECF4C] hover:bg-[#FFD166] text-black py-2 px-4 rounded-lg font-semibold shadow-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommonAssessment;
