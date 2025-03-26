import React, { useEffect } from "react";
import { BsChatDots } from "react-icons/bs"; // Importing a chat icon from react-icons

const ChatbotIcon = () => {
  useEffect(() => {
    // Inject Botpress scripts when the component mounts
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/03/26/17/20250326171259-N231AZJV.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // Cleanup the scripts when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 bg-yellow-500 p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300 cursor-pointer">
      <BsChatDots className="text-3xl text-white" />
    </div>
  );
};

export default ChatbotIcon;
