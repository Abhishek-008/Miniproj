import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Resources from "./pages/Resources";
import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import Assessment from "./pages/Assessment";
import ChatbotIcon from "./components/ChatbotIcon"; // Import the ChatbotIcon component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/aboutus" element={<Aboutus />} />
          {/* Dynamic route for Assessment with disorder parameter */}
          <Route path="/assessment/:disorder" element={<Assessment />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </div>

      {/* Chatbot Icon appears on every page */}
      <ChatbotIcon />
    </Router>
  );
}

export default App;
