import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Chat({ isOpen, onClose }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm your AI assistant. How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thanks for your message! Our team will get back to you soon.",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="bg-purple-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat with AI Assistant</h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.isUser
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSend}
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}