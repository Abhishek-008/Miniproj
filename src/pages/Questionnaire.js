import React, { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import jsPDF from "jspdf";

const questions = [
  { text: "I feel down, depressed, or hopeless.", category: "Depression" },
  { text: "I feel nervous, anxious, or on edge.", category: "Anxiety" },
  { text: "I feel emotionally exhausted by daily tasks.", category: "Burnout" },
  { text: "I find it hard to relax or unwind.", category: "Stress" },
  { text: "I have trouble falling or staying asleep.", category: "Sleep" },
  { text: "I feel isolated or disconnected from others.", category: "Social" },
  { text: "I struggle with motivation or energy levels.", category: "Depression" },
];

const categories = ["Depression", "Anxiety", "Burnout", "Stress", "Sleep", "Social"];

const getRecommendation = (score) => {
  if (score <= 2) return "🟢 Mild — You're managing well. Keep up the good habits!";
  if (score <= 4) return "🟡 Moderate — Try mindfulness, journaling, or talking to someone.";
  if (score <= 6) return "🟠 High — Consider speaking to a counselor or therapist.";
  return "🔴 Severe — It's important to seek professional support. You're not alone.";
};

const MentalHealthAssessment = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const resultRef = useRef(); // For PDF capture

  const handleAnswer = (value) => {
    const updated = [...answers, { ...questions[currentQ], value: Number(value) }];
    setAnswers(updated);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
  };

  const calculateCategoryScores = () => {
    const scores = {};
    categories.forEach((cat) => (scores[cat] = 0));
    answers.forEach((ans) => {
      scores[ans.category] += ans.value;
    });
    return Object.entries(scores).map(([name, score]) => ({
      name,
      score,
      recommendation: getRecommendation(score),
    }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Mental Health Assessment Results", 20, 20);

    const results = calculateCategoryScores();
    let y = 35;
    results.forEach((cat) => {
      doc.setFontSize(12);
      doc.text(`${cat.name}: ${cat.score}/10`, 20, y);
      y += 8;
      doc.setFontSize(10);
      doc.text(`${cat.recommendation}`, 25, y);
      y += 12;
    });

    doc.save("Mental_Health_Assessment.pdf");
  };

  const progress = Math.round(((currentQ + 1) / questions.length) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        {!showResults ? (
          <>
            <h2 className="text-xl font-semibold text-blue-800 mb-2 text-center">
              Mental Health Assessment
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Question {currentQ + 1} of {questions.length}
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-6">
              <div
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-lg font-medium mb-4 text-center text-gray-700">
              {questions[currentQ].text}
            </p>
            <div className="grid grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => handleAnswer(num)}
                  className="bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition-all"
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="text-sm text-center text-gray-400 mt-4">
              1 = Not at all, 5 = Extremely
            </p>
          </>
        ) : (
          <div ref={resultRef}>
            <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
              Your Assessment Results
            </h2>

            {calculateCategoryScores().map((cat) => (
              <div key={cat.name} className="mb-4 bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-blue-800">{cat.name}</h3>
                <p className="text-gray-800">Score: {cat.score} / 10</p>
                <p className="text-sm text-gray-600 mt-1">{cat.recommendation}</p>
              </div>
            ))}

            <h3 className="text-lg font-semibold mt-8 mb-2 text-center text-gray-800">
              Visual Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={calculateCategoryScores()} margin={{ top: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Bar dataKey="score" fill="#38bdf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={resetAssessment}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                Retake Assessment
              </button>
              <button
                onClick={downloadPDF}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg shadow-md transition-all"
              >
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthAssessment;
