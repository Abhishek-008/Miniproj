// Resources.js

import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFC8DD]">
      <div className="bg-[#FFAFCC] p-8 rounded-2xl shadow-2xl max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Resources for Support
        </h1>
        <p className="text-black mb-6 text-center">
          Here are some mental health resources to help you.
        </p>

        {/* List of resources */}
        <ul className="list-disc list-inside text-black">
          <li className="mb-2">Reach out to a professional therapist.</li>
          <li className="mb-2">Practice mindfulness and meditation.</li>
          <li className="mb-2">Talk to friends or family for support.</li>
        </ul>

        {/* More resources */}
        <button className="w-full bg-[#FF758F] hover:bg-[#FF92A1] text-white py-3 mt-6 rounded-lg font-semibold shadow-lg transition duration-200">
          Explore More Resources
        </button>
      </div>
    </div>
  );
};

export default Resources;
