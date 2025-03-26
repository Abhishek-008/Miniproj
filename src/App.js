import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import Resources from "./pages/Resources";
import Index from "./pages/Index";
import ChatbotIcon from "./components/ChatbotIcon"; // Import the ChatbotIcon component

// If you have a Chatbot component, import it here
// import Chatbot from "./components/Chatbot"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/index" element={<Index />} />
          {/* Route for Chatbot */}
          <Route path="/chatbot" element={<div>Chatbot Page</div>} /> 
          {/* Replace <div> with your actual Chatbot component when available */}
          {/* Example: <Route path="/chatbot" element={<Chatbot />} /> */}
        </Routes>
      </div>

      {/* Chatbot Icon appears on every page */}
      <ChatbotIcon />
    </Router>
  );
}

export default App;
