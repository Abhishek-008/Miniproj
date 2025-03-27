import React from "react";

const Resources = () => {
  return (
    <div className="min-h-screen bg-[#FDF6F0] flex items-center justify-center">
      <div className="bg-[#FFF4CC] p-10 rounded-3xl shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Mental Health Resources
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Explore helpful resources to support your mental well-being.
        </p>

        {/* List of resources with icons */}
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-[#FFE599] p-3 rounded-full mr-4 shadow-md">
              <span role="img" aria-label="Therapist" className="text-2xl">
                💬
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Professional Therapy
              </h2>
              <p className="text-gray-600">
                Seek guidance from a licensed therapist to better understand
                and manage your mental health.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#FFE599] p-3 rounded-full mr-4 shadow-md">
              <span role="img" aria-label="Mindfulness" className="text-2xl">
                🧘‍♂️
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Mindfulness & Meditation
              </h2>
              <p className="text-gray-600">
                Practice mindfulness and meditation techniques to reduce stress
                and improve focus.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#FFE599] p-3 rounded-full mr-4 shadow-md">
              <span role="img" aria-label="Support" className="text-2xl">
                👥
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">
                Social Support
              </h2>
              <p className="text-gray-600">
                Talk to friends or family members who can provide emotional
                support and encouragement.
              </p>
            </div>
          </div>
        </div>

        {/* More resources button */}
        <button className="w-full bg-[#FECF4C] hover:bg-[#FFD166] text-black py-4 mt-10 rounded-lg font-semibold shadow-lg transition-all duration-200 ease-in-out">
          Explore More Resources
        </button>
      </div>
    </div>
  );
};

export default Resources;
