import React, { useState } from 'react';
import { sendMessageToChatGPT } from '../services/chatService';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim()) {
      const response = await sendMessageToChatGPT(input);
      setMessages([...messages, { text: input, sender: 'user' }, { text: response, sender: 'bot' }]);
      setInput('');
    }
  };

  return (
    <div className='chat-interface'>
      <div className='messages'>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>{message.text}</div>
        ))}
      </div>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInterface;
