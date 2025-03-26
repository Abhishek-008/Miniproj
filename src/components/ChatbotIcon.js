// ChatbotIcon.js

import React from "react";
import { Link } from "react-router-dom";
import { BsChatDots } from "react-icons/bs"; // Importing a chat icon from react-icons

const ChatbotIcon = () => {
  return (
    <Link to="/chatbot"> {/* Replace '/chatbot' with your actual chatbot route */}
      <div className="fixed bottom-6 right-6 bg-[#FECF4C] p-4 rounded-full shadow-lg hover:bg-[#FFD166] transition-colors duration-300 cursor-pointer">
        <BsChatDots className="text-3xl text-white" />
      </div>
    </Link>
  );
};

export default ChatbotIcon;
