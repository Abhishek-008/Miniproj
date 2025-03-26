import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuestionsByDisorder } from "./data/questionData";

const Assessment = () => {
  const { disorder } = useParams();
  const questions = getQuestionsByDisorder(disorder);
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = parseInt(value);
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateTotalScore();
    }
  };

  const calculateTotalScore = () => {
    const score = answers.reduce((sum, answer) => (answer !== null ? sum + answer : sum), 0);
    const result = calculateResult(score);
    navigate("/result", { state: { totalScore: score, result, disorder } });
  };

  const calculateResult = (score) => {
    if (disorder === "anxiety") {
      if (score >= 0 && score <= 4) return "Minimal Anxiety";
      else if (score >= 5 && score <= 9) return "Mild Anxiety";
      else if (score >= 10 && score <= 14) return "Moderate Anxiety";
      else if (score >= 15 && score <= 21) return "Severe Anxiety";
    } else if (disorder === "depression") {
      if (score >= 1 && score <= 4) return "Minimal Depression";
      else if (score >= 5 && score <= 9) return "Mild Depression";
      else if (score >= 10 && score <= 14) return "Moderate Depression";
      else if (score >= 15 && score <= 19) return "Moderately Severe Depression";
      else if (score >= 20 && score <= 27) return "Severe Depression";
    }
    return "";
  };

  const progressPercentage = Math.round(
    ((currentQuestionIndex + 1) / questions.length) * 100
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0]">
      <div className="max-w-3xl w-full mx-auto p-6 text-center bg-white shadow-lg rounded-lg transition-all duration-200 ease-in-out">
        <h1 className="text-3xl font-semibold mb-6 text-black">
          {disorder.charAt(0).toUpperCase() + disorder.slice(1)} Assessment
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
          <div
            className="bg-[#FECF4C] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <p className="text-black text-lg mb-4">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        {currentQuestionIndex < questions.length ? (
          <>
            {/* Question Placard */}
            <div className="mb-8 p-6 bg-[#FDF6F0] border border-[#FECF4C] rounded-xl shadow-md transition-all duration-200">
              <p className="text-xl font-medium mb-6 text-gray-900">
                {questions[currentQuestionIndex].text}
              </p>

              {/* Answer Options */}
              <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((option) => (
                  <button
                    key={option}
                    className={`w-full py-3 rounded-lg font-semibold text-lg transition-colors duration-200
                      ${
                        answers[currentQuestionIndex] === option
                          ? "bg-[#FECF4C] text-black"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    onClick={() => handleAnswerChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Labels Below the Options */}
              <div className="mt-4 grid grid-cols-4 text-center text-gray-600 text-sm">
                <div>Not at all</div>
                <div>Several days</div>
                <div>More than half the days</div>
                <div>Nearly every day</div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextQuestion}
              className="bg-[#FECF4C] hover:bg-[#FFD166] text-black font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-200"
              disabled={answers[currentQuestionIndex] === null}
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Assessment;
