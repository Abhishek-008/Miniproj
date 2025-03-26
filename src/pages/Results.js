// Results.js

import React from "react";

const Results = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFC8DD]">
      <div className="bg-[#FFAFCC] p-8 rounded-2xl shadow-2xl max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Your Mental Health Results
        </h1>
        <p className="text-black mb-6 text-center">
          Based on your answers, here’s an overview of your mental health status.
        </p>

        {/* Example result */}
        <div className="bg-white p-4 rounded-lg mb-4 text-center">
          <h2 className="text-2xl font-bold text-black">Mild Anxiety</h2>
          <p className="text-black">
            You might be feeling overwhelmed, but with support, you can manage it.
          </p>
        </div>

        {/* Actionable button */}
        <button className="w-full bg-[#FF758F] hover:bg-[#FF92A1] text-white py-3 rounded-lg font-semibold shadow-lg transition duration-200">
          Get Help Now
        </button>
      </div>
    </div>
  );
};

export default Results;
