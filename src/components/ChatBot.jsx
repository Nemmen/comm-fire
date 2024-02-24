import React, { useState } from 'react';
import { TbMessageChatbot } from "react-icons/tb";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center bg-purple-600 text-white rounded-full w-12 h-12 focus:outline-none transition-transform duration-300 transform hover:scale-105"
      >
        <TbMessageChatbot className="w-6 h-6" />
      </button>
      <div className={`fixed bottom-20 h-[400px] right-6 transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-white rounded-lg shadow-lg' : 'opacity-0'}`}>
        <div className="bg-white w-80    border border-gray-200">
          {/* Chatbot content goes here */}
          <div className="p-4">
            <p className="text-lg font-semibold text-gray-800">Chatbot</p>
            {/* Options based replies */}
            <div className="mt-4 space-y-2 ">
              {/* Example options */}
              <p className='p-2 bg-white/50 '>Hey There! What You want to know!</p>
              <div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Option 1</button>
              </div>
              <div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Option 1</button>
              </div>
              <div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Option 1</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
