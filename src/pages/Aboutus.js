import React from "react";
import Image1 from "../images/image2.png";
import Image2 from "../images/image3.png";
import Image3 from "../images/image4.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#FDF6F0] flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full mx-auto p-8 rounded-lg shadow-lg">
        
        {/* Mission Statement */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#FECF4C] text-center mb-4">
            Our Mission
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Our mission is to support mental well-being by providing easy access to resources, assessments, and guidance. 
            We believe that everyone deserves a safe space to care for their mental health.
          </p>
          <p className="text-lg text-gray-800">
            This platform is designed to make mental health care approachable, confidential, and personalized. 
            Whether you’re seeking self-care, mental health assessments, or expert advice, we are here to assist you on your journey.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-black text-center mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: AI-Powered Mental Health Assessment */}
            <div className="bg-[#FDF6F0] border border-[#FECF4C] rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-200 hover:shadow-lg">
              <img
                 src={Image1}
                alt="AI Mental Health Assessment"
                className="w-32 h-32 rounded-full mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Powered Mental Health Assessment
              </h3>
              <p className="text-gray-700 text-center">
                Get personalized insights into your mental well-being using our advanced AI, which analyzes your responses.
              </p>
            </div>

            {/* Feature 2: Interactive Chatbot */}
            <div className="bg-[#FDF6F0] border border-[#FECF4C] rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-200 hover:shadow-lg">
              <img
                src={Image2}
                alt="Interactive Chatbot"
                className="w-32 h-32 rounded-full mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Mental Health Chatbot
              </h3>
              <p className="text-gray-700 text-center">
                Engage with our chatbot for real-time mental health support and personalized recommendations based on your responses.
              </p>
            </div>

            {/* Feature 3: Mental Health Resources */}
            <div className="bg-[#FDF6F0] border border-[#FECF4C] rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-200 hover:shadow-lg">
              <img
                src={Image3}
                alt="Mental Health Resources"
                className="w-32 h-32 rounded-full mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Resources for Mental Health Improvement
              </h3>
              <p className="text-gray-700 text-center">
                Access curated resources to improve your mental health, including self-care tips and stress management techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-black text-center mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            We envision a world where mental health care is accessible to all, empowering individuals to take control of their well-being.
          </p>
          <p className="text-lg text-gray-800">
            Our goal is to eliminate the stigma surrounding mental health and ensure that everyone feels supported on their journey.
          </p>
        </section>

        {/* Invitation to Engage */}
        <section>
          <h2 className="text-3xl font-semibold text-black text-center mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Mental health is a lifelong journey, and we’re here to walk alongside you every step of the way. Explore our assessments, resources, and support tools.
          </p>
          <p className="text-lg text-gray-800">
            Together, we can make a difference.
          </p>
        </section>

        {/* Catchy Phrase */}
        <section className="text-center mt-8">
          <h2 className="text-2xl font-bold text-[#FECF4C] mb-4">
            "Your mind matters, and we're here to help you nurture it."
          </h2>
          <p className="text-lg text-gray-800">
            Taking care of your mental health is the first step to overall well-being. Don't hesitate—start today.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
